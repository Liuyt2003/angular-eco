import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OktaAuthModule } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductListComponent,RouterLink,RouterLinkActive,ProductCategoryMenuComponent,SearchComponent,NgbModule,CartStatusComponent,ReactiveFormsModule,LoginStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-eco';
}
