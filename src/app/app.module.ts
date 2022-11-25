import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DeveloperDashboardComponent } from './developer/developer-dashboard/developer-dashboard.component';
import { ProjectmanagerDashboardComponent } from './projectmanager/projectmanager-dashboard/projectmanager-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { ListusersComponent } from './admin/listusers/listusers.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { SignupComponent } from './signup/signup.component';
import { DataTablesModule } from 'angular-datatables';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddRoleComponent,
    ForgetpasswordComponent,
    DeveloperDashboardComponent,
    ProjectmanagerDashboardComponent,
    AdminDashboardComponent,
    ResetpasswordComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    AdminLayoutComponent,
    ListusersComponent,
    AddUserComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
