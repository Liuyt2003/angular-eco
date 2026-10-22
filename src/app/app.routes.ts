import { Routes,RouterModule, Router } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { OktaAuthModule,OktaCallbackComponent,OKTA_CONFIG, OktaAuthGuard } from '@okta/okta-angular';
import {OktaAuth} from '@okta/okta-auth-js';
import myAppConfig from './config/my-app-config';
import { MembersPageComponent } from './components/members-page/members-page.component';
import { Injector } from '@angular/core';
const oktaConfig=myAppConfig.oidc;
const oktaAuth=new OktaAuth(oktaConfig);
function sendToLoginPage(oktaAuth:OktaAuth,injector:Injector) {
    const router=injector.get(Router);
    router.navigate(['/login'])
    
}
export const routes: Routes = [
    {path:'members',component:MembersPageComponent,canActivate:[OktaAuthGuard],data:{onAuthRequired:sendToLoginPage}},
    {path:'login/callback',component:OktaCallbackComponent},
    {path:'login',component:LoginComponent},

    {path:'checkout',component:CheckoutComponent},
    {path:'cart-details',component:CartDetailsComponent},
    {path:'products/:id',component:ProductDetailsComponent},
    {path:'search/:keyword',component:ProductListComponent},
    {path:'category/:id',component:ProductListComponent},
    {path:'category',component:ProductListComponent},
    {path:'products',component:ProductListComponent},
    {path:'',redirectTo:'/products',pathMatch:'full'},
    {path:'**',redirectTo:'/products',pathMatch:'full'}

];

