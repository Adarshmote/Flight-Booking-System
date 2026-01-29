import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

/**
 * Functional Auth Guard
 * Protects routes from unauthenticated users
 */
export const authGuard: CanActivateFn = (): boolean => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) return true;

  router.navigate(['/auth/login']); // ✅ FIXED
  return false;
};

