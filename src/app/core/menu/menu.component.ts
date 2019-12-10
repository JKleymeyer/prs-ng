import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';
import { BaseComponent } from 'src/app/feature/base/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(protected sysSvc: SystemService) {
    super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit();
    this.menuItems = [
      new MenuItem("User", "/users/list", "Users List"),
      new MenuItem("Vendor", "/vendors/list", "Vendors List"),
      new MenuItem("Product", "/products/list", "Products List"),
      new MenuItem("Request", "/requests/list", "Requests List"),
      new MenuItem("Review", "/requests/review", "Reviews List"),
      new MenuItem("Log out", "/users/login", "User Login"),
    ];
  }

}
