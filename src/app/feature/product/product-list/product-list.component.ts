import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { JsonResponse } from 'src/app/model/json-response';
import { ProductService } from 'src/app/service/product.service';
import { BaseComponent } from '../../base/base/base.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends BaseComponent implements OnInit {
  title: string = "Product List";
  product: Product[] = [];

  constructor(private productSvc: ProductService) { 
    super ();
  }


  ngOnInit() {
    super.ngOnInit();
    this.productSvc.list().subscribe(jr=>{
      this.product = jr.data as Product[];
    });
  }

}
