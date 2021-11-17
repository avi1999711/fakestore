import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proformat } from './products/product.modal';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Proformat>('http://localhost:5000/getdata');
  }
}
