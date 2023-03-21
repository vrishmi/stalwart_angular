import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModulepmService } from '../service/modulepm.service';

@Component({
  selector: 'app-edit-pmmodule',
  templateUrl: './edit-pmmodule.component.html',
  styleUrls: ['./edit-pmmodule.component.css']
})
export class EditPmmoduleComponent {
  moduleId:string=""
  module_name=""
  Project=""
  Status=""
  Statuses:Array<any>=[]
  Projects:Array<any>=[]

  ModuleNameError=""
  ProjectTitleError=""
  StatusError=""

  constructor(private router:Router,private ar:ActivatedRoute,private moduleService:ModulepmService,private ts:ToastrService)
  {
    this.moduleId=ar.snapshot.params["moduleId"];
    
    this.moduleService.getModuleByidApi(this.moduleId).subscribe(resp=>{
      if(resp.status==200)
      {
        this.module_name=resp.data.module_name;
        //this.Project=resp.data.Project._id;
        this.Status=resp.data.Status._id;
      }
    },
    err=>
    {
      console.log(err);
      ts.error("Something went wrong, try again!","",{timeOut:3000})
    })
  }
  ngOnInit(): void {
    this.moduleService.getAllStatusApi().subscribe(resp => {
      this.Statuses = resp.data;
      console.log(this.Statuses);
    })
    
    this.moduleService.getAllProjectApi().subscribe(resp => 
      {
        this.Projects = resp.data; 
        console.log(this.Projects);  
        
      })
}   

  updateModule()
  {
    let module={
      "moduleId":this.moduleId,
      "module_name":this.module_name,
      //"Project":this.Project,
      "Status":this.Status
    }

    this.moduleService.updateModuleApi(module).subscribe(resp=>{
      this.ts.success("MODULE MODIFIED","",{timeOut:3000})
      this.router.navigateByUrl("/projectmanager/listprojects")
    },err=>{
      console.log(err)
      this.ts.error("Something went wrong, try again!","",{timeOut:3000})
    })
  }

}
