import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { User } from 'src/app/model/user.class';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';
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
  user: User[] = [];

  constructor(private requestSvc:RequestService,
    private userSvc: UserService,
    private router: Router,
    private loc: Location,
    protected sysSvc: SystemService) {
      super(sysSvc)
     }

  ngOnInit() {
    this.request.user = this.sysSvc.loggedInUser;
    console.log(this.request);
  }

  save(): void {
    this.requestSvc.save(this.request).subscribe(jresp => {
      console.log(this.request);
      this.router.navigateByUrl("/requests/list");
    });
  }

  backClicked(){
    this.loc.back();
  }

}
