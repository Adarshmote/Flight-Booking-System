import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  registerForm: FormGroup;
  submitted:boolean = false;

  constructor(private fb: FormBuilder, private customValidator: CustomvalidationService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit(email: string, password: string) {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!');
      console.table(this.registerForm.value);
      this.reset();
      console.log(email, password)
      this.authService.signup(email, password).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.router.navigate(['/login']);
      });
    }
    }
  
  public reset():void{
    this.registerForm.reset({
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    }),
    this.submitted = false;
  }

}
