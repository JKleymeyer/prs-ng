import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { JsonResponse } from 'src/app/model/json-response';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from '../../base/base/base.component';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent extends BaseComponent implements OnInit {
  title: string = "Request Review";
  request: Request [] = [];
  id:number = 0;
  jr: JsonResponse; 

  constructor(private requestSvc: RequestService,
    protected sysSvc:SystemService) {
      super(sysSvc)
     }

  ngOnInit() {
    super.ngOnInit();
    this.getRequestInReviewStatus();
  }
  getRequestInReviewStatus(){
      this.requestSvc.requestInReviewStatus(this.loggedInUser.id).subscribe(jr => {
        this.request = jr.data as Request[];
      });
  }

}
