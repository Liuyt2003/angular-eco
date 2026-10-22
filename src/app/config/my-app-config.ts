
import { OktaAuth } from '@okta/okta-auth-js';

const myAppConfig = {
  oidc: {
    issuer: 'https://integrator-3658532.okta.com/oauth2/default',
    clientId: '0oa18w9gv2eRAa2l7698',
    redirectUri:  'http://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email']
  }
};

export default myAppConfig;
