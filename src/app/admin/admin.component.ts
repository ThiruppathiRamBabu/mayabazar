import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartserviveService } from '../cartservice.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  productItems: any[] = [];
  filterItems: any[] = [];
  items: any = [];
  myForm: FormGroup;
  updateForm: FormGroup;
  searchForm: FormGroup;
  constructor(private cs: CartserviveService, private http: HttpClient) {
    this.myForm = new FormGroup({
      type: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      clothurl: new FormControl('', Validators.required),
    })
    this.updateForm = new FormGroup({
      id: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      clothurl: new FormControl('', Validators.required),
    })
    // http.get('http://localhost:3000/programming-languages').subscribe(
    this.cs.getProductsFromApi().subscribe(
      (response: any) => {
        console.log(response);
        this.productItems = this.productItems.concat(response.data);
        this.filterItems = this.filterItems.concat(this.productItems);
      })


    // let product: any = localStorage.getItem('clothes')
    // const datas: any = JSON.parse(product);
    // if (datas) {
    //   datas.forEach((product: any) => {
    //     this.productItems.push(product);
    //   });
    //   this.filterItems = this.filterItems.concat(this.productItems);
    // }
    this.searchForm = new FormGroup({
      searchName: new FormControl('', Validators.required)
    })
  }
  onSearchClick() {
    let data = {
      type: this.searchForm.value.searchName
    }
    this.filterItems = this.productItems.filter((item: any) => (item.type.toUpperCase() === data.type.toUpperCase()));

  }
  add() {
    console.log('add', this.myForm)
    if (this.myForm.valid) {
      let data: any = {
        type: this.myForm.value.type,
        model: this.myForm.value.model,
        price: this.myForm.value.price,
        description: this.myForm.value.description,
        clothurl: this.myForm.value.clothurl,
        id: Math.round(Math.random() * 100000)
      }
      console.log(data)
      // let product: any = localStorage.getItem('clothes');
      // if (product) {
      //   this.productItems = this.productItems.concat(data)
      // }
      // else {
      //   this.productItems.push(data)
      // }
      // localStorage.setItem('clothes', JSON.stringify(this.productItems));
      // this.filterItems = this.filterItems.concat(data);


      this.cs.postProductToApi(data).subscribe(result => console.log(result));
    }
    this.reset();
    $('#exampleModal').modal('hide')
  }
  removeItem(id: number) {
    // this.filterItems = this.filterItems.filter((val: any, i: any) => i != index);
    // localStorage.setItem('clothes', JSON.stringify(this.filterItems));
    // localStorage.setItem('clothType', JSON.stringify(this.filterItems));
    this.cs.removeProductToApi(id).subscribe(remove => console.log(remove));
  }
  editForm(product: any) {
    this.updateForm.setValue({
      id: product.id,
      type: product.type,
      model: product.model,
      price: product.price,
      description: product.description,
      clothurl: product.clothurl
    })
  }
  updateItem() {
    if (this.updateForm.valid) {
      let data: any = {
        id: this.updateForm.value.id,
        type: this.updateForm.value.type,
        model: this.updateForm.value.model,
        price: this.updateForm.value.price,
        description: this.updateForm.value.description,
        clothurl: this.updateForm.value.clothurl
      }
      this.cs.updateProductToApi(data).subscribe(result => console.log(result));
      $('#updateModal').modal('hide');
    }
  }
  reset() {
    this.myForm.reset({
      type: '',
      model: '',
      price: '',
      description: '',
      clothurl: '',
    })
  }
}

