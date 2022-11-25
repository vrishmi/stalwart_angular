import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { DeveloperDashboardComponent } from './developer/developer-dashboard/developer-dashboard.component';
import { ProjectmanagerDashboardComponent } from './projectmanager/projectmanager-dashboard/projectmanager-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { ListusersComponent } from './admin/listusers/listusers.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:LoginComponent},
  {path:"addrole",component:AddRoleComponent},
  {path:"signup",component:SignupComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  {path:"developer/dashboard",component:DeveloperDashboardComponent},
  {path:"projectmanager/dashboard",component:ProjectmanagerDashboardComponent},
  {path:"resetpassword",component:ResetpasswordComponent},
  {path:"admin",component:AdminLayoutComponent,children:[
    {path:"dashboard",component:AdminDashboardComponent},
    {path:"listusers",component:ListusersComponent},
    {path:"adduser",component:AddUserComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
