import { Component, OnInit } from '@angular/core';
import { Request } from 'selenium-webdriver/http';
import { RequestService } from 'src/app/service/request.service';
import { BaseComponent } from '../../base/base/base.component';
import { JsonResponse } from 'src/app/model/json-response';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent extends BaseComponent implements OnInit {
    title: string = "Request List";
    request: Request [] = [];
    jr: JsonResponse;

  constructor(private requestSvc: RequestService,
    protected sysSvc: SystemService) {
    super(sysSvc);
   }

  ngOnInit() {
    super.ngOnInit();
    this.requestSvc.list().subscribe(jr => {
      this.request = jr.data as Request[];
      console.log(this.request);
    });
  }

}
