import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModulepmService } from '../service/modulepm.service';

@Component({
  selector: 'app-listid-module',
  templateUrl: './listid-module.component.html',
  styleUrls: ['./listid-module.component.css']
})
export class ListidModuleComponent {
  projectId:string=""
  module_name=""
  Project=""
  Status=""
  Statuses:Array<any>=[]
  Projects:Array<any>=[]
  module:Array<any>=[]

  ModuleNameError=""
  ProjectTitleError=""
  StatusError=""

  constructor(private router:Router,private ar:ActivatedRoute,private moduleService:ModulepmService,private ts:ToastrService)
  {
    this.projectId=ar.snapshot.params["projectId"];

  }
  ngOnInit(): void {
    this.moduleService.getModuleByProjectApi(this.projectId).subscribe(resp =>{
      this.module = resp.data;
        console.log(this.module);
    })
     
    this.moduleService.getAllStatusApi().subscribe(resp => {
      this.Statuses = resp.data;
      //console.log(this.Statuses);
    })
    
    this.moduleService.getAllProjectApi().subscribe(resp => 
      {
        this.Projects = resp.data; 
        //console.log(this.Projects);  
      })
}   

deleteModule(moduleId:any,module_name:string)
{
  if(confirm("Are you sure you want to delete module "+module_name))
  {
      this.moduleService.deleteModuleApi(moduleId).subscribe(resp=>{
      console.log(resp);
      this.ts.success("Module Successfully Deleted","",{timeOut:3000})
      setTimeout(function(){
        location.reload();
      },1000)
      
    })
  }
}
}