import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  searchText: string='';
  items:any;
  constructor(private router:Router){}
  onSearchClick(value: string) {
    let product = localStorage.getItem('clothes');
    if (product) {
      let productData = JSON.parse(product);
      this.items = productData.filter((p: any) => p.type.toUpperCase() === value.toUpperCase());
      localStorage.setItem('filter to clothType',JSON.stringify(this.items));
      this.router.navigate(['/products']);
  }    
}
}
