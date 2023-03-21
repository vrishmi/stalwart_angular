import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModuleService } from '../service/module.service';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent {
  module_name = ""
  Project = "-1"
  Projects:Array<any>=[]
  Status="-1"
  Statuses:Array<any>=[]

  ModuleNameError = ""
  StatusError = ""
  ProjectError = ""

  

  constructor(private moduleService:ModuleService,private router:Router,private tr:ToastrService) { }

  ngOnInit(): void 
  {
    this.moduleService.getAllStatusApi().subscribe(resp => 
    {
      this.Statuses = resp.data; 
      console.log(this.Statuses);
    }) 
    this.moduleService.getAllProjectApi().subscribe(resp => 
    {
      this.Projects = resp.data; 
      console.log(this.Projects);  
    })
  }

  saveModule() 
  {

    let isError = false
    

    if (this.module_name == "" || this.module_name.trim().length == 0) {
      
      this.ModuleNameError = "Please Enter module name"
      isError = true
    } else {
      this.ModuleNameError = ""
    }

    if (this.Status == ""||this.Status=="-1") {
      isError = true
      this.StatusError = "Please Enter Status"
      
    } else {
      this.StatusError = ""
    }

    if (this.Project == ""||this.Project=="-1") {
      isError = true
      this.ProjectError = "Please Enter Project"
      
    } else {
      this.ProjectError = ""
    }
  
    if (isError == true) {
      console.log("error")
    } 
    else 
    {
      //api call and save data into db 
      let module = 
      {
        "module_name": this.module_name, 
        "Status":this.Status,
        "Project":this.Project
      }

      this.moduleService.addModuleApi(module).subscribe(resp => {
        console.log(resp);
        if (resp.status == 200) {
          this.tr.success("Module Successfully Added","",{timeOut:3000})
          this.router.navigateByUrl("/admin/listmodules")
        } else {
          alert("SMWR")
        }

      });
    
    }

  }

}