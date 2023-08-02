
import { Component } from '@angular/core';
import { CartserviveService } from '../cartservice.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  searchText: string = '';
  items: any = [];
  order: any = [];
  buyItem: any[] = [];
  cart: any[] = [];
  buyForm: FormGroup;
  payForm: FormGroup;
  constructor(private cs: CartserviveService, private router: Router) {
    // let datas = localStorage.getItem('filter to clothType');
    // if (datas) {
    //   const parseData = JSON.parse(datas);
    //   this.items = parseData;
    // }
    
   let data:any = localStorage.getItem('type');
   const type = JSON.parse(data);
   console.log('types',type);
    this.cs.getProductsFromApi().subscribe(
      (response: any) => {
        console.log(response);  
        this.items = response.data.filter((element: any) => element.type === type);
        console.log(this.items)
      });
    
    this.buyForm = new FormGroup({
      address: new FormControl('', Validators.required),
      address2: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      altercontact: new FormControl('', Validators.required)
    })
    this.payForm = new FormGroup({
      holdername: new FormControl('', Validators.required),
      cardnumber: new FormControl('', Validators.required),
      expirydate: new FormControl('', Validators.required),
      cvvnumber: new FormControl('', Validators.required)
    })

    const cartData: any = this.cs.getCloth();
    if (cartData) {
      this.cart = this.cart.concat(cartData);
    }
    const orderItems: any = localStorage.getItem('order');
    let parseItem = JSON.parse(orderItems);
    if (orderItems) {
      parseItem.forEach((val: any) => {
        this.order.push(val);
      })
    }
  }
  onSearchClick(value: string) {
    console.log('value', value);
    let product = localStorage.getItem('clothes');
    if (product) {
      let productData = JSON.parse(product);
      this.items = productData.filter((p: any) => p.type.toUpperCase() === value.toUpperCase());
    }
  }
  // for add to cart
  addcart(data: any) {
    data.qty = 1;
    const cartData: any = this.cs.getCloth();
    if (cartData) {
      this.cart = this.cart.concat(data);
      console.log('concat', cartData)
    }
    else {
      this.cart.push(data)
      console.log('push', cartData)
    }
    this.cs.addCloth(this.cart)
  }
  buyNow(buy: any) {
    const buyData: any = this.cs.getBuy();
    this.buyItem.push(buy)
    this.cs.addBuy(this.buyItem)
    this.buyItem = [];
    this.reset();
  }
  BillingAddress() {
    if (this.buyForm.valid) {
      $('#paymentModal').modal('show');
    }
    else {
    }
  }
  
  payment() {
    $('#paymentModal').modal('hide')
    const item: any = localStorage.getItem('Buy')
    let buybuy = JSON.parse(item);
    if (this.payForm.valid) {
      this.router.navigate(['/myproduct']);
    }
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
  reset() {
    this.buyForm.reset({
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      contact: '',
      altercontact: ''
    })
  }
}
