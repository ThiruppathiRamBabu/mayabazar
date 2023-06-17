import { Component } from '@angular/core';
import { CartserviveService } from '../cartservice.service';

@Component({
  selector: 'app-pant',
  templateUrl: './pant.component.html',
  styleUrls: ['./pant.component.scss']
})
export class PantComponent {
  // cart: any[] = [];
  // items: any[] = [];
  // cartData: any[] = [];
  // constructor(private cs: CartserviveService) {
  //   const cartData: any = this.cs.getCloth();
  //   if (cartData) {
  //     this.cart = this.cart.concat(cartData);
  //   }
  //   let product: any = localStorage.getItem('clothes');
  //   let pant: any = JSON.parse(product)
  //   pant = pant.filter((p: any) => p.type === 'pant');
  //   if (product) {
  //     pant.forEach((pants: any) => {
  //       this.items.push(pants)
  //     });
  //   }
  //   const cartItem: any = this.cs.getCloth();
  //   if (cartItem) {
  //     this.cartData = this.cartData.concat(cartItem);
  //     }
  // }
  // addPant(data: any) {
  //   const cartData: any = this.cs.getCloth();
  //   if (cartData) {
  //     this.cart = this.cart.concat(data);
  //     console.log('concat',cartData)
  //   }
  //   else {
  //     this.cart.push(data)
  //     console.log('push',cartData)
  //   }
  //   this.cs.addCloth(this.cart)

  // }
}
