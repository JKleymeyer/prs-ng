import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from '../../base/base/base.component';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent extends BaseComponent implements OnInit {
  title: string = "Request Create";
  request: Request = new Request();

  constructor(private requestSvc:RequestService,
    private router: Router,
    private loc: Location,
    protected sysSvc: SystemService) {
      super(sysSvc)
     }

  ngOnInit() {
    this.request.user = this.sysSvc.loggedInUser;;
  }

  save(): void {
    this.requestSvc.save(this.request).subscribe(jresp => {
      this.router.navigateByUrl("/requests/list");
    });
  }

  backClicked(){
    this.loc.back();
  }

}
