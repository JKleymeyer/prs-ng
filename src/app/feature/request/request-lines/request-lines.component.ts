import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from '../../base/base/base.component';
import { RequestService } from 'src/app/service/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent extends BaseComponent implements OnInit {
  title: string = "Request List";
  title2: string = "Line Items";
  title3: string = "Request";
  request: Request = new Request;
  lineItem: LineItem[] = [];
  id: number = 0;

  constructor(private requestSvc: RequestService,
    private route: ActivatedRoute,
    protected sysSvc: SystemService,
    private lineItemSvc: LineItemService,
    private router: Router) {
    super(sysSvc)
  }

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.getLineItem();
  }
  getLineItem() {
    this.requestSvc.get(this.id).subscribe(jr => {
      this.request = jr.data as Request;
    });
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.lineItemSvc.listLineItemById(this.id).subscribe(jr => {
      this.lineItem = jr.data as LineItem[];
    });
  }
  delete(lineId: number) {
    this.lineItemSvc.delete(lineId).subscribe(jr => {
      this.getLineItem();
    });
  }
  submitForReview(){
    this.requestSvc.submitRequest(this.request).subscribe(jresp => {
      this.router.navigateByUrl("/requests/list");
    });
  }
}
