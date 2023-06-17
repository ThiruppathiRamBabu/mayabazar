import { Component } from '@angular/core';
import { CartserviveService } from '../cartservice.service';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.scss']
})
export class ShirtComponent {
  // cart: any[] = [];
  // items: any[] = [];
  // cartData: any[] = [];
  // constructor(private cs: CartserviveService) {
  //   const cartData: any = this.cs.getCloth();
  //   if (cartData) {
  //     this.cart = this.cart.concat(cartData);
  //   }
  //   let product: any = localStorage.getItem('clothes');
  //   let shirt: any = JSON.parse(product)
  //   shirt = shirt.filter((s: any) => s.type === 'shirt');
  //   if (product) {
  //     shirt.forEach((shirts: any) => {
  //       this.items.push(shirts)
  //     });
  //   }
  //   const cartItem: any = this.cs.getCloth();
  //   console.log('cartItem', cartItem)
  //   if (cartItem) {
  //     this.cartData = this.cartData.concat(cartItem);
  //   }
  // }
  
  // addShirt(data: any) {
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
