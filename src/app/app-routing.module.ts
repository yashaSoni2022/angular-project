import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersDataComponent } from './users-data/users-data.component';

const routes: Routes = [ 
  {path:'getUsersData', component: UsersDataComponent},
  {path:'saveUserData',component: UserFormComponent}
 ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
