import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;
  submitted: boolean = false;
  errorStat: boolean = false;

  constructor(private fb: FormBuilder, private customValidator: CustomvalidationService, private authService: AuthService, private router: Router, private el: ElementRef) { }

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement)
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
    }
    );
  }

  ngOnDestroy() {
    this.el.nativeElement.remove()
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }

  onLogin(email: string, password: string) {
    this.submitted = true;
    this.errorStat = true;
    if (this.registerForm.valid) {
      this.authService.login(email, password).subscribe((res: HttpResponse<any>) => {
        if (res.status === 200) {
          this.customValidator.loggedIn();
          this.router.navigate(['/']);
          console.log(this.customValidator.loggedIn());
        }

      });
      this.reset();
    }

  }

  public reset(): void {
    this.registerForm.reset({
      email: '',
      password: '',
    }),
      this.submitted = false;
  }
}
