import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { JsonResponse } from 'src/app/model/json-response';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  title: string = "Request Detail";
  request: Request = new Request();
  id: number = 0;
  jr: JsonResponse;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private requestSvc: RequestService) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestSvc.get(this.id).subscribe(jr => {
      this.request = jr.data as Request;
    });
  }

  delete() {
    this.requestSvc.delete(this.id).subscribe(jr => {
      this.router.navigateByUrl("requests/list")
    });
  }

}
