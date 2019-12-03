import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { JsonResponse } from 'src/app/model/json-response';
import { VendorService } from 'src/app/service/vendor.service';
import { BaseComponent } from '../../base/base/base.component';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent extends BaseComponent implements OnInit {
  title: string = "User List";
  vendors: Vendor[] = [];
  jr: JsonResponse;

  constructor(private vendorSvc: VendorService) { 
    super ();
  }

  ngOnInit() {
    super.ngOnInit();
    this.vendorSvc.list().subscribe(jr => {
      this.vendors = jr.data as Vendor[];
      console.log(this.vendors);
    });
  }

}
