import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateDataComponent } from './update-data/update-data.component';

const routes: Routes = [{path:"", component:FormComponent },{path:"dashboard", component:DashboardComponent }, {path:"user-profile", component:UserProfileComponent }, {path:"manage-users", component:ManageUserComponent }, {path:"manage-users/add-user", component:AddUserComponent },{path:"manage-users/update-user", component:UpdateDataComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
