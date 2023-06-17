import { Component } from '@angular/core';

@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.component.html',
  styleUrls: ['./myproduct.component.scss']
})
export class MyproductComponent {
  items:any[]=[];
  product:any=[];
constructor(){
  let data:any = localStorage.getItem('order');
     this.items =  JSON.parse(data);
  }
}

