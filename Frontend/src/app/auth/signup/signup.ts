import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
})
export class SignupComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  // ✅ Form includes confirmPassword & role (UI only)
  signupForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    role: ['user'] // UI purpose only
  });

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }

  onSubmit() {
    if (this.signupForm.invalid) return;

    const { name, email, password } = this.signupForm.value;

    // ✅ ONLY send required backend fields
    const payload = { name, email, password };

    this.authService.register(payload).subscribe({
      next: () => this.router.navigate(['/auth/login']),
      error: err => alert(err.error?.message || 'Signup failed')
    });
  }
}
