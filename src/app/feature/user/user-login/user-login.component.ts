import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base/base.component';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { SystemService } from 'src/app/service/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent extends BaseComponent implements OnInit {
  message: string = "";
  user: User = new User();


  constructor(private userSvc: UserService,
    protected sysSvc: SystemService,
    private router: Router) {
    super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit();
    //defaulting username and password for testing purposes
    this.user.userName = 'Lbell';
    this.user.password = 'bellsrock!';
    //initialize system user to null
    this.sysSvc.loggedInUser = null;
  }
  login() {
    console.log("login called for user:", this.user);
    this.userSvc.login(this.user)
      .subscribe(jr => {
        if (jr.errors == null) {
          if (jr.data == null) {
            // no error but still no user???
            this.message = "Invalid Username/Password combo.  Retry";
          }
          else {
            // should be g2g!
            this.user = jr.data as User;
            this.sysSvc.loggedInUser = this.user;
            //good login, navigate to home/welcome page
            this.router.navigateByUrl('/home');
          }
        }
        else {
          this.message = "Invalid Username/Password combo.  Retry";
        }
      });
  }

}
