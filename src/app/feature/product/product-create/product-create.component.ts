import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { Vendor } from 'src/app/model/vendor.class';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title: string = "Product Create";
  product: Product = new Product();
  vendor: Vendor[] = [];

  constructor(private productSvc: ProductService,
    private vendorSvc: VendorService,
    private router: Router,
    private loc: Location) { }

  ngOnInit() {
    this.vendorSvc.list().subscribe(jr =>{
      this.vendor = jr.data as Vendor[];  
      console.log("movies: ", this.vendor);
    });
  }

  save(): void {
    this.productSvc.save(this.product).subscribe(jresp => {
      console.log(this.product);
      this.router.navigateByUrl("/products/list");
    });
  }

  backClicked(){
    this.loc.back();
  }

}
