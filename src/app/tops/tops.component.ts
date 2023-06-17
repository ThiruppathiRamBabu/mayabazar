import { Component } from '@angular/core';
import { CartserviveService } from '../cartservice.service';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.scss']
})
export class TopsComponent {
  // cart: any[] = [];
  // items: any[]=[];
  // cartData: any[]=[];
  // constructor(private cs: CartserviveService) {
  //   const cartData: any = this.cs.getCloth();
  //   if (cartData) {
  //     this.cart = this.cart.concat(cartData);
  //   }
  //   let product: any = localStorage.getItem('clothes');
  //   let top: any = JSON.parse(product)
  //   top = top.filter((o: any) => o.type === 'top');
  //   if (product) {
  //     top.forEach((tops: any) => {
  //       this.items.push(tops)
  //     });
  //   }
  //   const cartItem: any = this.cs.getCloth();
  //   console.log('cartItem', cartItem)
  //   if (cartItem) {
  //     this.cartData = this.cartData.concat(cartItem);
  //   }
  // }
  
  // addTop(data: any) {
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
