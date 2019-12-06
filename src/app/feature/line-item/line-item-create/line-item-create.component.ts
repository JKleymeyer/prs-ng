import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { Request } from 'src/app/model/request.class';
import { Product } from 'src/app/model/product.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { RequestService } from 'src/app/service/request.service';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {
  title: string = "Line Item Create";
  lineItem: LineItem = new LineItem;
  request: Request = new Request;
  product: Product[] = [];
  id: number = 0;

  constructor(private lineItemsSvc: LineItemService,
    private requestSvc: RequestService,
    private productSvc: ProductService,
    private router: Router,
    private loc: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestSvc.get(this.id).subscribe(jr => {
      this.request = jr.data as Request;
    });
    this.productSvc.list().subscribe(jr => {
      this.product = jr.data as Product[];
    });
  }

  save(): void {
    this.lineItem.request = this.request;
    this.lineItemsSvc.save(this.lineItem).subscribe(jr => {
      this.router.navigateByUrl("/requests/request-lines/"+this.id);
    });
  }
  backClicked() {
    this.loc.back();
  }
}
