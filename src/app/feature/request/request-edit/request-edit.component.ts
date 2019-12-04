import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  title: string = "Request Edit";
  user: User [] = [];
  request: Request = new Request();
  id:number = 0;

  constructor(private requestSvc: RequestService,
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private loc : Location) { }

  ngOnInit() {
    this.route.params.subscribe(parms=> this.id = parms['id']);
    this. requestSvc.get(this.id).subscribe(jr=>{
      this.request=jr.data as Request;
    });
    this.userSvc.list().subscribe(jr =>{
      this.user = jr.data as User[];
    });
  }
  update(): void {
    this.requestSvc.update(this.request).subscribe(jresp => {
      console.log(this.request);
      this.router.navigateByUrl("/requests/list");
    });
  }
  backClicked(){
    this.loc.back();

  }

}
