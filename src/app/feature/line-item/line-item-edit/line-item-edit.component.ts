import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from 'src/app/model/product.class';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent implements OnInit {
  title: string = "Line Item Edit";
  lineItem: LineItem = new LineItem;
  product: Product [] = [];
  id: number = 0;

  constructor(private lineItemSvc: LineItemService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private loc: Location) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.lineItemSvc.get(this.id).subscribe(jr=>{
      this.lineItem = jr.data as LineItem;
    });
    this.productSvc.list().subscribe(jr =>{
      this.product = jr.data as Product[];
    });
  }

  update(): void {
    //not going back to the correct url
    this.lineItemSvc.save(this.lineItem).subscribe(jr=>{
      this.router.navigateByUrl("/requests/request-lines/"+this.lineItem.request.id);
    });
  }

  compProduct(a: Product, b: Product): boolean{
    return a && b && a.id === b.id;
  }

  backClicked(){
    this.loc.back();
  }

}
