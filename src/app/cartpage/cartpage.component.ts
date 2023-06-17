import { Component } from '@angular/core';
import { CartserviveService } from '../cartservice.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss']
})
export class CartpageComponent {
  cartData:any[]=[];
  order: any = [];
  buyItem: any[] = [];
  qty: number = 1;
  totalPrice: number = 0;
  constructor(private cs :CartserviveService, private router:Router){
    let clothe = cs.getCloth();
  if (clothe) {
    clothe.forEach((val: any) => {
      this.cartData.push(val);
    });
  }
  const orderItems: any = localStorage.getItem('order');
    let parseItem = JSON.parse(orderItems);
    if (orderItems) {
      parseItem.forEach((val: any) => {
        this.order.push(val);
      })
    }
    if(this.cartData.length){
      this.totalPrice = this.cartData[0].price;
    }
  
}
removeItem(i: number): void {
  this.cartData.splice(i, 1);
  this.cs.addCloth(this.cartData);
}
buyNow(buy: any) {
  const buyData: any = this.cs.getBuy();
  this.buyItem.push(buy)
  this.cs.addBuy(this.buyItem)
  this.buyItem = [];
  // console.log('buybuy',this.cs.buyItem)
}
payment() {
  $('#paymentModal').modal('hide')
  const item: any = localStorage.getItem('Buy')
  let buybuy = JSON.parse(item);
  this.router.navigate(['/myproduct'])
  localStorage.removeItem('Buy')
  let datas: any = {
    product: buybuy,
  }
  if (this.order) {
    this.order = this.order.concat(datas);
  } else {
    this.order.push(datas)
  }
  localStorage.setItem('order', JSON.stringify(this.order));
  return this.buyItem;
}
quantity(){
 this.totalPrice = this.cartData[0].price * this.qty;  
}

}


