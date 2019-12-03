import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MenuComponent } from './core/menu/menu.component';
import { SortPipe } from './pipe/sort.pipe';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { BaseComponent } from './feature/base/base/base.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SortPipe,
    UserListComponent,
    BaseComponent,
    VendorListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
