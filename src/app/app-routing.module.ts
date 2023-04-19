import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { ProjectmanagerDashboardComponent } from './projectmanager/projectmanager-dashboard/projectmanager-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { ListusersComponent } from './admin/listusers/listusers.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { SignupComponent } from './signup/signup.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ListProjectComponent } from './admin/list-project/list-project.component';
import { AddProjectComponent } from './admin/add-project/add-project.component';
import { ListModuleComponent } from './admin/list-module/list-module.component';
import { AddModuleComponent } from './admin/add-module/add-module.component';
import { EditProjectComponent } from './admin/edit-project/edit-project.component';
import { EditModuleComponent } from './admin/edit-module/edit-module.component';
import { EditTaskComponent } from './admin/edit-task/edit-task.component';
import { AddTaskComponent } from './admin/add-task/add-task.component';
import { ListTaskComponent } from './admin/list-task/list-task.component';
import { AddStatusComponent } from './admin/add-status/add-status.component';
import { ListStatusComponent } from './admin/list-status/list-status.component';
import { EditStatusComponent } from './admin/edit-status/edit-status.component';
import { ProjectmanagerLayoutComponent } from './projectmanager/projectmanager-layout/projectmanager-layout.component';
import { ListProjectuserComponent } from './projectmanager/list-projectuser/list-projectuser.component';
import { AddModulepmComponent } from './projectmanager/add-modulepm/add-modulepm.component';
import { ListModulepmComponent } from './projectmanager/list-modulepm/list-modulepm.component';
import { ListidModuleComponent } from './projectmanager/listid-module/listid-module.component';
import { EditPmmoduleComponent } from './projectmanager/edit-pmmodule/edit-pmmodule.component';
import { ListpmTasksComponent } from './projectmanager/listpm-tasks/listpm-tasks.component';
import { AddpmTasksComponent } from './projectmanager/addpm-tasks/addpm-tasks.component';
import { AssignProjectComponent } from './admin/assign-project/assign-project.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { ProjectReportComponent } from './admin/project-report/project-report.component';
import { EffortsReportComponent } from './admin/efforts-report/efforts-report.component';
import { ReportComponent } from './projectmanager/report/report.component';
import { StatusReportComponent } from './projectmanager/status-report/status-report.component';
import { EffortReportComponent } from './projectmanager/effort-report/effort-report.component';
import { DeveloperLayoutComponent } from './developer/developer-layout/developer-layout.component';
import { DeveloperDashboardComponent } from './developer/developer-dashboard/developer-dashboard.component';
import { ListtaskdComponent } from './developer/listtaskd/listtaskd.component';
import { EditProjectpmComponent } from './projectmanager/edit-projectpm/edit-projectpm.component';
import { AssigntaskComponent } from './projectmanager/assigntask/assigntask.component';
import { EditDtaskComponent } from './developer/edit-dtask/edit-dtask.component';
import { EditpmTasksComponent } from './projectmanager/editpm-tasks/editpm-tasks.component';
import { SpentTimeComponent } from './developer/spent-time/spent-time.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginGuard } from './login.guard';
import { LogoutComponent } from './logout/logout.component';
import { ProfileDevComponent } from './developer/profile-dev/profile-dev.component';
import { DevprofileComponent } from './devprofile/devprofile.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"developerprofile",component:DevprofileComponent},
  {path:"adminprofile",component:AdminprofileComponent},
  {path:"login",component:LoginComponent},
  {path:"addrole",component:AddRoleComponent},
  {path:"signup",component:SignupComponent},
  {path:"logout",component:LogoutComponent},
  {path:"profile",component:ProfileComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  {path:"developer",component:DeveloperLayoutComponent,children:[
    {path:"dashboard",component:DeveloperDashboardComponent},
    {path:"listtask",component:ListtaskdComponent},
    {path:"edittask/:taskId",component:EditDtaskComponent},
    {path:"spenttime",component:SpentTimeComponent},
    {path:"devprofile",component:ProfileDevComponent}
    
  ],canActivate:[LoginGuard]},
  {path:"projectmanager",component:ProjectmanagerLayoutComponent,children:[
    {path:"dashboard",component:ProjectmanagerDashboardComponent},
    {path:"listprojects",component:ListProjectuserComponent},
    {path:"addmodule",component:AddModulepmComponent},
    {path:"listmodule",component:ListModulepmComponent},
    {path:"listmodulebyid/:projectId",component:ListidModuleComponent},
    {path:"editproject/:projectId",component:EditProjectpmComponent},
    // {path:"editmodules/:moduleId",component:EditPmmoduleComponent},
    {path:"listtasks/:moduleId",component:ListpmTasksComponent},
    {path:"editmodule/:moduleId",component:EditPmmoduleComponent},
    {path:"addtask",component:AddpmTasksComponent},
    {path:"report",component:ReportComponent},
    {path:"statusreport",component:StatusReportComponent},
    {path:"effortreport",component:EffortReportComponent},
    {path:"assigntask",component:AssigntaskComponent},
    {path:"edittask/:taskId",component:EditpmTasksComponent}
  ],canActivate:[LoginGuard]},
  {path:"resetpassword",component:ResetpasswordComponent},
  {path:"admin",component:AdminLayoutComponent,children:[
    {path:"dashboard",component:AdminDashboardComponent},
    {path:"listusers",component:ListusersComponent},
    {path:"adduser",component:AddUserComponent},
    {path:"edituser/:userId",component:EditUserComponent},
    {path:"listprojects",component:ListProjectComponent},
    {path:"addproject",component:AddProjectComponent},
    {path:"listmodules",component:ListModuleComponent},
    {path:"addmodules",component:AddModuleComponent},
    {path:"editproject/:projectId", component:EditProjectComponent},
    {path:"editmodule/:moduleId", component:EditModuleComponent},
    {path:"edittask/:taskId", component:EditTaskComponent},
    {path:"addtask",component:AddTaskComponent},
    {path:"listtasks",component:ListTaskComponent},
    {path:"addstatus",component:AddStatusComponent},
    {path:"liststatus",component:ListStatusComponent},
    {path:"editstatus/:statusId", component:EditStatusComponent},
    {path:"assignproject",component:AssignProjectComponent},
    {path:"reports",component:ReportsComponent},
    {path:"statusreport",component:ProjectReportComponent},
    {path:"effortsreport",component:EffortsReportComponent}

  ],canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
