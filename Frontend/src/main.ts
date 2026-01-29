import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { App } from './app/app';
import { routes } from './app/app.routes';
import { AuthInterceptor } from './app/services/auth.interceptor';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),

    // ✅ Enable DI-based interceptors
    provideHttpClient(withInterceptorsFromDi()),

    // ✅ Register interceptor class
    AuthInterceptor
  ]
}).catch(err => console.error(err));
