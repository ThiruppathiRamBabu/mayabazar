import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { MayabazarComponent } from './mayabazar/mayabazar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ClothesComponent } from './clothes/clothes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShirtComponent } from './shirt/shirt.component';
import { PantComponent } from './pant/pant.component';
import { TShirtComponent } from './tshirt/tshirt.component';
import { SareeComponent } from './saree/saree.component';
import { ChudiComponent } from './chudi/chudi.component';
import { TopsComponent } from './tops/tops.component';
import { BillingpageComponent } from './billingpage/billingpage.component';
import { PaymenttermsComponent } from './paymentterms/paymentterms.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { NewarraivalComponent } from './newarraival/newarraival.component';
import { SpofferComponent } from './spoffer/spoffer.component';
import { MyproductComponent } from './myproduct/myproduct.component';
import { HttpClientModule } from '@angular/common/http';
import {CharThumbModule} from 'char-thumbnail';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    MayabazarComponent,
    LoginComponent,
    HomepageComponent,
    ClothesComponent,
    NavbarComponent,
    ShirtComponent,
    PantComponent,
    TShirtComponent,
    SareeComponent,
    ChudiComponent,
    TopsComponent,
    BillingpageComponent,
    PaymenttermsComponent,
    CartpageComponent,
    AdminComponent,
    ProductsComponent,
    NewarraivalComponent,
    SpofferComponent,
    MyproductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CharThumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
