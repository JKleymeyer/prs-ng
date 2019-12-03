import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: UserListComponent},
  {path: 'users/list', component: UserListComponent},
  {path: 'vendors/list', component: VendorListComponent},
  {path: '**', component: UserListComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
