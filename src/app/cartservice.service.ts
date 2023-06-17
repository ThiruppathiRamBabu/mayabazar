import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartserviveService {
  cartData: any[] = [];
  // buyItem : any[] = [];
  constructor(private http: HttpClient) { }
  addCloth(cloth: any) {
    let datas = JSON.stringify(cloth)
    localStorage.setItem('cart', datas)
  }
  getCloth() {
    let data: any = localStorage.getItem('cart')
    return JSON.parse(data);
  }
  addBuy(buynow: any) {
    let buyItem = JSON.stringify(buynow)
    localStorage.setItem('Buy', buyItem)
  }
  getBuy() {
    let item: any = localStorage.getItem('Buy')
    return JSON.parse(item);
  }

  getProductsFromApi(): Observable<any> {
    return this.http.get('http://localhost:3000/mayabazar_product');
  }
  postProductToApi(requestBody: any): Observable<any> {
    return this.http.post('http://localhost:3000/mayabazar_product', requestBody);
  }
  removeProductToApi(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/mayabazar_product/${id}`);
  }
  updateProductToApi(data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/mayabazar_product/${data.id}`, data);
  }
}














