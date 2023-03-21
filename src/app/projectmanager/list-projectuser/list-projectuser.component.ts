import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectuserService } from '../service/projectuser.service';

@Component({
  selector: 'app-list-projectuser',
  templateUrl: './list-projectuser.component.html',
  styleUrls: ['./list-projectuser.component.css']
})
export class ListProjectuserComponent {
  
  projectId:string=""

  module_name=""
  constructor(private router:Router,private ar:ActivatedRoute,private projectUserService:ProjectuserService,private toastrService:ToastrService)
  {
    this.projectId=ar.snapshot.params["projectId"];
    
    this.projectUserService.getModuleByProjectApi(this.projectId).subscribe(resp=>{
      if(resp.status==200)
      {
        this.module_name=resp.data.module_name
      }
    },err=>
      {
        console.log(err);
        toastrService.error("Something went wrong, try again!","",{timeOut:3000})
    })
  }
  project:Array<any>=[]
  
  ngOnInit(): void {
    let userId=localStorage.getItem("userId")
    this.projectUserService.getAllProjectApiByPm(userId).subscribe(resp => {
      this.project = resp.data;
      console.log(this.project);
      
    })
  }
}
