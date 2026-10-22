
import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

import { routes } from './app.routes';
import { ProductService } from './services/product.service';
import myAppConfig from './config/my-app-config';

const oktaAuth = new OktaAuth(myAppConfig.oidc);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    ProductService,
    importProvidersFrom(OktaAuthModule),
    {
      provide: OKTA_CONFIG,
      useValue: { oktaAuth }
    }
  ]
};
