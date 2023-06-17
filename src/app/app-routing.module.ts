import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { MayabazarComponent } from './mayabazar/mayabazar.component';
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

const routes: Routes = [{
    path: '',
    component : MayabazarComponent
  },
  {
    path: 'signin',
    component : SigninComponent
  },
  {
    path: 'login',
    component : LoginComponent
  },
  {
    path: 'navbar',
    component : NavbarComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'clothes',
    component: ClothesComponent
  },
  {
    path: 'shirt',
    component: ShirtComponent
  },
  {
    path: 'pant',
    component: PantComponent
  },
  {
    path: 'tshirt',
    component: TShirtComponent
  },
  {
    path: 'saree',
    component: SareeComponent
  },
  {
    path: 'chudi',
    component: ChudiComponent
  },
  {
    path: 'tops',
    component: TopsComponent
  },
  {
    path: 'billingpage',
    component: BillingpageComponent
  },
  {
    path: 'paymentterms',
    component: PaymenttermsComponent
  },
  {
    path: 'cartpage',
    component: CartpageComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'newarraival',
    component: NewarraivalComponent
  },
  {
    path: 'spoffer',
    component: SpofferComponent
  },
  {
    path: 'myproduct',
    component: MyproductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
