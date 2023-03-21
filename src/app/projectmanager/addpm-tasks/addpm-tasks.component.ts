import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectuserService } from '../service/projectuser.service';
import { TaskpmService } from '../service/taskpm.service';

@Component({
  selector: 'app-addpm-tasks',
  templateUrl: './addpm-tasks.component.html',
  styleUrls: ['./addpm-tasks.component.css']
})
export class AddpmTasksComponent {
  CompletionDate=""
  TaskTitle=""
  StartDate=""
  EstimatedHour=""
  UtilizedHour="0"
  Status="-1"
  Module="-1"
  Project="-1"
  Statuses:Array<any>=[]
  Modules:Array<any>=[]
  Projects:Array<any>=[]

  CompletionDateError=""
  TaskTitleError=""
  StartDateError=""
  EstimatedHourError=""
  UtilizedHourError=""
  ModuleError = ""
  StatusError = ""
  ProjectError=""

  constructor(private taskService:TaskpmService,private router:Router,private tr:ToastrService,private projectuserservice:ProjectuserService) { }

  ngOnInit(): void 
  {
    this.taskService.getAllStatusApi().subscribe(resp => 
    {
      this.Statuses = resp.data; 
      console.log(this.Statuses);
    }) 
    /*this.taskService.getAllModuleApi().subscribe(resp => 
    {
      this.Modules = resp.data; 
      console.log(this.Modules);  
    })*/
   
   /* this.projectuserservice.getAllProjectApi().subscribe(resp => 
    {
      this.Projects = resp.data; 
      console.log(this.Projects);  
    })*/
    let userId=localStorage.getItem("userId")
      this.taskService.getAllProjectApiByPm(userId).subscribe(resp => {
        this.Projects = resp.data;
        console.log(this.Projects);
        
      })
    
  }
  getModule()
  {
    this.taskService.getModuleByProjectApi(this.Project).subscribe(resp => 
      {
        this.Modules = resp.data; 
        console.log(this.Modules);  
      })
  }
  saveTask() 
  {

    let isError = false

    if (this.TaskTitle == "" || this.TaskTitle.trim().length == 0) {
      
      this.TaskTitleError = "Please Enter Task Title"
      isError = true
    } else {
      this.TaskTitleError = ""
    }

    if (this.Status == ""||this.Status=="-1") {
      isError = true
      this.StatusError = "Please Enter Status"
      
    } else {
      this.StatusError = ""
    }

    if (this.Module == ""||this.Module=="-1") {
      isError = true
      this.ModuleError = "Please Enter Module"
      
    } else {
      this.ModuleError = ""
    }

    if (this.Project == ""||this.Project=="-1") {
      isError = true
      this.ProjectError = "Please Enter Project"
      
    } else {
      this.ProjectError = ""
    }

    if (this.StartDate == "" || this.StartDate.trim().length == 0) {
      isError = true
      this.StartDateError = "Please Enter StartDate"
      
    } else {
      this.StartDateError = ""
    }

    if (this.CompletionDate == "" || this.CompletionDate.trim().length == 0) {
      isError = true
      this.CompletionDateError = "Please Enter CompletionDate"
      
    } else {
      this.CompletionDateError = ""
    }

    if (this.EstimatedHour == "" ) {
      isError = true
      this.EstimatedHourError = "Please Enter EstimatedHour"
      
    } else {
      this.EstimatedHourError = ""
    }

    if (isError == true) {
      console.log("error")
    } 
    else 
    {
      let task = 
      {
        "TaskTitle":this.TaskTitle,
        "StartDate":this.StartDate,
        "CompletionDate":this.CompletionDate,   
        "EstimatedHour":this.EstimatedHour,
        "UtilizedHour":this.UtilizedHour,
        "Status":this.Status,
        "Module":this.Module
      }

      this.taskService.addTaskApi(task).subscribe(resp => {
        console.log(resp);
        if (resp.status == 200) {
          this.tr.success("Task Successfully Added","",{timeOut:3000})
          this.router.navigateByUrl("/projectmanager/listprojects")
        } else {
          alert("SMWR")
        }

      });
    
    }

  }
}
