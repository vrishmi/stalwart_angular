import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModulepmService } from '../service/modulepm.service';
import { ProjectuserService } from '../service/projectuser.service';

@Component({
  selector: 'app-assigntask',
  templateUrl: './assigntask.component.html',
  styleUrls: ['./assigntask.component.css']
})
export class AssigntaskComponent {
  User="-1"
  Project = "-1"
  Module="-1"
  Task="-1"
  Tasks:Array<any>=[] 
  Modules:Array<any>=[] 
  Projects:Array<any>=[] 
  Users:Array<any>=[]
  isAssign="-1"
  



  constructor(private projectService:ProjectuserService,private moduleService:ModulepmService,private router:Router,private tr:ToastrService) { }

  ngOnInit(): void 
  {
    this.projectService.getAllTaskUserApi().subscribe(resp => 
    {
      this.Users = resp.data; 
      console.log(this.Users);
    }) 
    let userId=localStorage.getItem("userId")
    this.projectService.getAllProjectApiByPm(userId).subscribe(resp => 
    {
      this.Projects = resp.data; 
      console.log(this.Projects);  
    })
  }
  getModule()
  {
    this.moduleService.getModuleByProjectApi(this.Project).subscribe(resp => 
      {
        this.Modules = resp.data; 
        console.log(this.Modules);  
      })
  }
  getTask()
  {
    this.moduleService.getTaskByModuleApi(this.Module).subscribe(resp => 
      {
        this.Tasks = resp.data; 
        console.log(this.Tasks);  
      })
  }

  saveTaskUser() 
  {
      //api call and save data into db 
      let taskUser = 
      {
        "User":this.User,
        // "Project":this.Project,
        // "Module":this.Module,
        "Task":this.Task,
        "isAssign":this.isAssign
      }

      this.projectService.addTaskUserApi(taskUser).subscribe(resp => {
        console.log(resp);
        if (resp.status == 1) 
        {
          this.tr.success("Task Successfully Assigned","Success",{timeOut:3000})
          this.router.navigateByUrl("/projectmanager/dashboard")
        } else {
          alert("SMWR")
        }

      });
    
    }

 
}
