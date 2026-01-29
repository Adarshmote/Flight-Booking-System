import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    // ✅ Skip token if:
    // 1. No token exists
    // 2. Public flights GET API
    if (!token || (req.url.includes('/flights/') && req.method === 'GET')) {
      return next.handle(req);
    }

    // 🚫 DO NOT send admin fake token to backend
    if (role !== 'admin') {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req);
  }
}
