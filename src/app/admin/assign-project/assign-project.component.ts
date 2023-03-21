import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-assign-project',
  templateUrl: './assign-project.component.html',
  styleUrls: ['./assign-project.component.css']
})
export class AssignProjectComponent {
  User="-1"
  Project = "-1"
  Projects:Array<any>=[] 
  Users:Array<any>=[]
  isAssign="-1"



  constructor(private projectService:ProjectService,private router:Router,private tr:ToastrService) { }

  ngOnInit(): void 
  {
    this.projectService.getAllUserApi().subscribe(resp => 
    {
      this.Users = resp.data; 
      console.log(this.Users);
    }) 
    this.projectService.getAllProjectApi().subscribe(resp => 
    {
      this.Projects = resp.data; 
      console.log(this.Projects);  
    })
  }

  saveProjectUser() 
  {
      //api call and save data into db 
      let projectUser = 
      {
        "User":this.User,
        "Project":this.Project,
        "isAssign":this.isAssign
      }

      this.projectService.addProjectUserApi(projectUser).subscribe(resp => {
        console.log(resp);
        if (resp.status == 1) 
        {
          this.tr.success("Project Successfully Assigned","Success",{timeOut:3000})
          
          this.router.navigateByUrl("/admin/dashboard")
        } else {
          alert("SMWR")
        }

      });
    
    }

  }

