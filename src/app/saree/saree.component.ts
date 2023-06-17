import { Component } from '@angular/core';
import { CartserviveService } from '../cartservice.service';

@Component({
  selector: 'app-saree',
  templateUrl: './saree.component.html',
  styleUrls: ['./saree.component.scss']
})
export class SareeComponent {
  // cart: any[] = [];
  // items: any[] = [];
  // cartData: any[] = [];
  // constructor(private cs: CartserviveService) {
  //   const cartData: any = this.cs.getCloth();
  //   if (cartData) {
  //     this.cart = this.cart.concat(cartData);
  //   }
  //   let product: any = localStorage.getItem('clothes');
  //   let saree: any = JSON.parse(product)
  //   saree = saree.filter((r: any) => r.type === 'saree');
  //   if (product) {
  //     saree.forEach((sarees: any) => {
  //       this.items.push(sarees)
  //     });
  //   }
  //   const cartItem: any = this.cs.getCloth();
  //   if (cartItem) {
  //     this.cartData = this.cartData.concat(cartItem);
  //     }
  // }
  
  // addSaree(data: any) {
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
