import { Component } from '@angular/core';
import { CartserviveService } from '../cartservice.service';

@Component({
  selector: 'app-chudi',
  templateUrl: './chudi.component.html',
  styleUrls: ['./chudi.component.scss']
})
export class ChudiComponent {
  // cart: any[] = [];
  // items:any[]=[];
  // cartData:any[]=[];
  // constructor(private cs: CartserviveService) {
  //   const cartData: any = this.cs.getCloth();
  //   if (cartData) {
  //     this.cart = this.cart.concat(cartData);                                                                                                                                                         
  //   }
  //   let product: any = localStorage.getItem('clothes');
  //   let chudi: any = JSON.parse(product)
  //   chudi = chudi.filter((c: any) => c.type === 'chudi');
  //   if (product) {
  //     chudi.forEach((chudis: any) => {
  //       this.items.push(chudis)
  //     });
  //   }
  //   const cartItem: any = this.cs.getCloth();
  //   console.log('cartItem', cartItem)
  //   if (cartItem) {
  //     this.cartData = this.cartData.concat(cartItem);
  //   }
  // }
  
  // addChudi(data: any) {
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
