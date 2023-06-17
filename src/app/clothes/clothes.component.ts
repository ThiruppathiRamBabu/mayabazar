import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviveService } from '../cartservice.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent {
  clothDatas = [
    {
      type: 'Shirt',
      url: '../assets/images (1).jpeg'
    },
    {
      type: 'Pant',
      url: '../assets/ivoc_olive_green_flat_front_slim_fit_cargo_pants.webp'
    },
    {
      type: 'Tshirt',
      url: '../assets/marlon-alves-A0mSSCEVh9A-unsplash.jpg'
    },
    {
      type: 'Saree',
      url: '../assets/sabesh-photography-TPwHjQy21O4-unsplash.jpg'
    },
    {
      type: 'Chudi',
      url: '../assets/desktop-wallpaper-keerthy-suresh-cute-pics-in-white-sudithar-latest-keerthi-suresh.jpg'
    },
    {
      type: 'Tops',
      url: '../assets/download (7).jpeg'
    },
  ]
  typeCloth: any[] = [];

  constructor(private router: Router, private cs: CartserviveService) { }
  goCloth(type:any) {
    // let data = localStorage.getItem('clothes');
    // if (data) {
    //   let parseData = JSON.parse(data);

    //   parseData.forEach((element: any) => {
    //     if (element.type == type) {
    //       this.typeCloth.push(element);
    //     }
    //   });
    // }
    // localStorage.setItem('filter to clothType', JSON.stringify(this.typeCloth));
    // this.router.navigate(['/products']);
    localStorage.setItem('type', JSON.stringify(type));
    console.log('type',type);
    this.router.navigate(['/products']);
  }
}
