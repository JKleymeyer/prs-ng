import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title: string = "Product Edit";
  product: Product = new Product();
  vendor: Vendor[] = [];
  id: number = 0;

  constructor(private vendorSvc: VendorService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private loc: Location) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.productSvc.get(this.id).subscribe(jr => {
      this.product = jr.data as Product;
    });
    this.vendorSvc.list().subscribe(jr => {
      this.vendor = jr.data as Vendor[];
    });
  }
  update(): void {
    this.productSvc.save(this.product).subscribe(jresp => {
      this.router.navigateByUrl("/products/list");
    });
  }
  backClicked() {
    this.loc.back();
  }
  compVendor(a: Vendor, b: Vendor): boolean {
    return a && b && a.id === b.id;
  }
}
