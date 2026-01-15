const express = require('express');
const app = express();
const path = require('path');

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');


const { List, Task, User } = require('./db/models');

const jwt = require('jsonwebtoken');


/* MIDDLEWARE  */

app.use(bodyParser.json());


// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});


let authenticate = (req, res, next) => {
    let token = req.header('x-access-token');

    // verify the JWT
    jwt.verify(token, User.getJWTSecret(), (err, decoded) => {
        if (err) {

            res.status(401).send(err);
        } else {

            req.user_id = decoded._id;
            next();
        }
    });
}


let verifySession = (req, res, next) => {

    let refreshToken = req.header('x-refresh-token');

    let _id = req.header('_id');

    User.findByIdAndToken(_id, refreshToken).then((user) => {
        if (!user) {

            return Promise.reject({
                'error': 'User not found. Make sure that the refresh token and user id are correct'
            });
        }


        req.user_id = user._id;
        req.userObject = user;
        req.refreshToken = refreshToken;

        let isSessionValid = false;

        user.sessions.forEach((session) => {
            if (session.token === refreshToken) {

                if (User.hasRefreshTokenExpired(session.expiresAt) === false) {

                    isSessionValid = true;
                }
            }
        });

        if (isSessionValid) {

            next();
        } else {

            return Promise.reject({
                'error': 'Refresh token has expired or the session is invalid'
            })
        }

    }).catch((e) => {
        res.status(401).send(e);
    })
}

/* END MIDDLEWARE  */

/* USER ROUTES */


app.post('/users', (req, res) => {


    let body = req.body;
    let newUser = new User(body);

    newUser.save().then(() => {
        return newUser.createSession();
    }).then((refreshToken) => {


        return newUser.generateAccessAuthToken().then((accessToken) => {

            return { accessToken, refreshToken }
        });
    }).then((authTokens) => {
        res
            .header('x-refresh-token', authTokens.refreshToken)
            .header('x-access-token', authTokens.accessToken)
            .send(newUser);
    }).catch((e) => {
        res.status(400).send(e);
    })
})


/**
 * POST /users/login
 * Purpose: Login
 */
app.post('/users/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findByCredentials(email, password).then((user) => {
        return user.createSession().then((refreshToken) => {


            return user.generateAccessAuthToken().then((accessToken) => {

                return { accessToken, refreshToken }
            });
        }).then((authTokens) => {

            res
                .header('x-refresh-token', authTokens.refreshToken)
                .header('x-access-token', authTokens.accessToken)
                .send(user);
        })
    }).catch((e) => {
        res.status(400).send(e);
    });
})


/**
 * GET /users/me/access-token

 */

app.get('/users/me/access-token', verifySession, (req, res) => {

    req.userObject.generateAccessAuthToken().then((accessToken) => {
        res.header('x-access-token', accessToken).send({ accessToken });
    }).catch((e) => {
        res.status(400).send(e);
    });
})



app.listen(process.env.PORT || 5000)

if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, 'public')))
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, 'public', 'index.html'))
    });

}

