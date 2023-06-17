import { Component } from '@angular/core';
import { CartserviveService } from '../cartservice.service';

@Component({
  selector: 'app-t-shirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.scss']
})
export class TShirtComponent {
  // cart: any[] = [];
  // items: any[] = [];
  // cartData: any[] = [];
  // constructor(private cs: CartserviveService) {
  //   const cartData: any = this.cs.getCloth();
  //   if (cartData) {
  //     this.cart = this.cart.concat(cartData);
  //   }
  //   let product: any = localStorage.getItem('clothes');
  //   let tshirt: any = JSON.parse(product)
  //   tshirt = tshirt.filter((t: any) => t.type === 'tshirt');
  //   if (product) {
  //     tshirt.forEach((tshirts: any) => {
  //       this.items.push(tshirts)
  //     });
  //   }
  //   const cartItem: any = this.cs.getCloth();
  //   console.log('cartItem', cartItem)
  //   if (cartItem) {
  //     this.cartData = this.cartData.concat(cartItem);
  //   }
  // }
  
  // addTshirt(data: any) {
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
