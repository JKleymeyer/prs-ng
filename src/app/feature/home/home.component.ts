import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base/base.component';
import { SystemService } from 'src/app/service/system.service';
import { User } from 'src/app/model/user.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {
  title: string = "Welcome to the Brewery Request System,";
  user: User = new User;

  constructor(protected sysSvc: SystemService) {
    super(sysSvc)
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
