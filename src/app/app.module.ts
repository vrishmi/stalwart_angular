import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
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
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ToastrModule } from 'ngx-toastr';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { ListProjectComponent } from './admin/list-project/list-project.component';
import { ListModuleComponent } from './admin/list-module/list-module.component';
import { AddModuleComponent } from './admin/add-module/add-module.component';
import { EditProjectComponent } from './admin/edit-project/edit-project.component';
import { EditModuleComponent } from './admin/edit-module/edit-module.component';
import { EditTaskComponent } from './admin/edit-task/edit-task.component';
import { AddTaskComponent } from './admin/add-task/add-task.component';
import { ListTaskComponent } from './admin/list-task/list-task.component';
import { EditStatusComponent } from './admin/edit-status/edit-status.component';
import { AddStatusComponent } from './admin/add-status/add-status.component';
import { ListStatusComponent } from './admin/list-status/list-status.component';
import { LogoutComponent } from './logout/logout.component';
import { ProjectmanagerLayoutComponent } from './projectmanager/projectmanager-layout/projectmanager-layout.component';
import { ProjectmanagerHeaderComponent } from './projectmanager/projectmanager-header/projectmanager-header.component';
import { ProjectmanagerFooterComponent } from './projectmanager/projectmanager-footer/projectmanager-footer.component';
import { ProjectmanagerSidebarComponent } from './projectmanager/projectmanager-sidebar/projectmanager-sidebar.component';
import { ListProjectuserComponent } from './projectmanager/list-projectuser/list-projectuser.component';
import { AddProjectuserComponent } from './projectmanager/add-projectuser/add-projectuser.component';
import { AddModulepmComponent } from './projectmanager/add-modulepm/add-modulepm.component';
import { ListModulepmComponent } from './projectmanager/list-modulepm/list-modulepm.component';
import { ListidModuleComponent } from './projectmanager/listid-module/listid-module.component';
import { EditPmmoduleComponent } from './projectmanager/edit-pmmodule/edit-pmmodule.component';
import { ListpmTasksComponent } from './projectmanager/listpm-tasks/listpm-tasks.component';
import { AddpmTasksComponent } from './projectmanager/addpm-tasks/addpm-tasks.component';
import { EditpmTasksComponent } from './projectmanager/editpm-tasks/editpm-tasks.component';
import { ProjectReportComponent } from './admin/project-report/project-report.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { EffortsReportComponent } from './admin/efforts-report/efforts-report.component';
import { StatusReportComponent } from './projectmanager/status-report/status-report.component';
import { ReportComponent } from './projectmanager/report/report.component';
import { EffortReportComponent } from './projectmanager/effort-report/effort-report.component';
import { EditProjectpmComponent } from './projectmanager/edit-projectpm/edit-projectpm.component';
import { AssignProjectComponent } from './admin/assign-project/assign-project.component';
import { DeveloperComponent } from './developer/developer.component';
import { DeveloperLayoutComponent } from './developer/developer-layout/developer-layout.component';
import { DeveloperSidebarComponent } from './developer/developer-sidebar/developer-sidebar.component';
import { DeveloperFooterComponent } from './developer/developer-footer/developer-footer.component';
import { DeveloperDashboardComponent } from './developer/developer-dashboard/developer-dashboard.component';
import { DeveloperHeaderComponent } from './developer/developer-header/developer-header.component';
import { ListtaskdComponent } from './developer/listtaskd/listtaskd.component';
import { AssigntaskComponent } from './projectmanager/assigntask/assigntask.component';
import { EditDtaskComponent } from './developer/edit-dtask/edit-dtask.component';


 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddRoleComponent,
    ForgetpasswordComponent,
    ProjectmanagerDashboardComponent,
    AdminDashboardComponent,
    ResetpasswordComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    AdminLayoutComponent,
    ListusersComponent,
    AddUserComponent,
    SignupComponent,
    EditUserComponent,
    AddProjectComponent,
    ListProjectComponent,
    ListModuleComponent,
    AddModuleComponent,
    EditProjectComponent,
    EditModuleComponent,
    EditTaskComponent,
    AddTaskComponent,
    ListTaskComponent,
    EditStatusComponent,
    AddStatusComponent,
    ListStatusComponent,
    LogoutComponent,
    ProjectmanagerLayoutComponent,
    ProjectmanagerHeaderComponent,
    ProjectmanagerFooterComponent,
    ProjectmanagerSidebarComponent,
    ListProjectuserComponent,
    AddProjectuserComponent,
    AddModulepmComponent,
    ListModulepmComponent,
    ListidModuleComponent,
    EditPmmoduleComponent,
    ListpmTasksComponent,
    AddpmTasksComponent,
    EditpmTasksComponent,
    ProjectReportComponent,
    ReportsComponent,
    EffortsReportComponent,
    StatusReportComponent,
    ReportComponent,
    EffortReportComponent,
    EditProjectpmComponent,
    AssignProjectComponent,
    DeveloperComponent,
    DeveloperLayoutComponent,
    DeveloperSidebarComponent,
    DeveloperFooterComponent,
    DeveloperDashboardComponent,
    DeveloperHeaderComponent,
    ListtaskdComponent,
    AssigntaskComponent,
    EditDtaskComponent,
    
   
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
