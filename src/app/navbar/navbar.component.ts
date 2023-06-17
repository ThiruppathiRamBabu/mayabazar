import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartserviveService } from '../cartservice.service';
import { Router } from '@angular/router';
//import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() searchText: string='';
  @Output() searchClick = new EventEmitter<string>();

  typeCloth :any[]=[];
  searchItems: any[] = [];
  email: string= '';
  password : string ='';
  // showElement = true;
  // show = false;

  constructor(private cs: CartserviveService,private router :Router) {
    
  }
  onSearchClick() {
    this.searchClick.emit(this.searchText);
  }
  onSubmit(){
    if(this.email === 'admin@gmail.com' && this.password === 'babu'){
    $('#adminModal').modal('hide')
    this.router.navigate(['/admin'])
    console.log('login succesfully')
    }else if(this.email !== 'admin@gmail.com' || this.password !== 'babu'){
     this.router.navigate(['/homepage'])
    }else {
     console.log('login faild')
    }
 }
  // search() {
  //   console.log('click', this.searchForm.valid);
  //     if (this.searchForm.valid) {
  //        let name = this.searchForm.value.searchname;
  //        let data = localStorage.getItem('clothes');
  //        if (data) {
  //          let parseData = JSON.parse(data);
  //          parseData.forEach((element: any) => {
  //            if (element.type == name) {
  //              this.typeCloth.push(element);
  //              localStorage.setItem('filter to clothType', JSON.stringify(this.typeCloth));
  //            }
  //          });
  //        }
  //        this.typeCloth =[];
  //        this.searchForm.value.searchname ='';
  //        this.router.navigate(['/products']);

  //     }
  //   }
  }
  

