import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    // 🔐 ADMIN (frontend-only)
    if (email === 'admin@gmail.com' && password === 'admin@1234') {
      const fakeToken =
        btoa(JSON.stringify({ alg: 'none', typ: 'JWT' })) + '.' +
        btoa(JSON.stringify({ role: 'admin' })) + '.';

      localStorage.setItem('token', fakeToken);
      localStorage.setItem('role', 'admin');

      this.router.navigate(['/admin']);
      return;
    }

    // 👤 USER
    this.auth.login({ email, password }).subscribe({
      next: () => this.router.navigate(['/flights']),
      error: err => alert(err.error?.message || 'Login failed')
    });
  }
    navigateToSignup(): void {
    this.router.navigate(['/auth/signup']);
  }
}
