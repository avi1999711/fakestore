import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators'
import { ProductsService } from '../products.service';
import { Proformat } from './product.modal';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  productData : Proformat | undefined;
  limit = 0;
  oldPageOffset = 0;
  constructor(private proService: ProductsService, private router: Router) { }
  itemData: any;
  ngOnInit(): void {
    setTimeout(() => {
      this.proService.getProducts().subscribe((data: Proformat)=> {
        this.productData = {...data};
        this.itemData = this.productData.data;
      })
    }, 1000);
  }

  addToCart(){
    this.router.navigate(['cart']);
  }

  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event: any) {
        this.limit += 1
        if (window.pageYOffset == 0) {
          this.limit = 0
        }
        if (this.limit > 20) {
          this.limit = 20;
        }
     }
}
