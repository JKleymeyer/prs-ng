import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { LineItemService } from 'src/app/service/line-item.service';
import { BaseComponent } from '../../base/base/base.component';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent extends BaseComponent implements OnInit {
  title: string = "Review for approval";
  title2: string = "Line Items";
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
    this.requestSvc.get(this.id).subscribe(jr => {
      this.request = jr.data as Request;
    });
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.lineItemSvc.listLineItemById(this.id).subscribe(jr => {
      this.lineItem = jr.data as LineItem[];
    });
  }

  approve() {
    this.requestSvc.requestApprove(this.request).subscribe(jresp => {
      this.router.navigateByUrl("/requests/review");
    });
  }
  reject() {
    this.requestSvc.requestReject(this.request).subscribe(jresp => {
      this.router.navigateByUrl("/requests/review");
    });
  }

}
