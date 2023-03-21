import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {
  projectId:string=""
  Technology =""
  ProjectTitle=""
  FrontEnd="" 
  BackEnd =""
  CompletionDate =""
  StartDate =""
  EstimatedHour =""
  TotalUtilizedHour =""
  Status=""
  Statuses:Array<any>=[]

  TechnologyError =""
  ProjectTitleError=""
  FrontEndError="" 
  BackEndError =""
  CompletionDateError =""
  StartDateError =""
  EstimatedHourError =""
  TotalUtilizedHourError =""
  StatusError=""

  constructor(private router:Router,private ar:ActivatedRoute,private projectService:ProjectService,private ts:ToastrService)
  {
    this.projectId=ar.snapshot.params["projectId"];
    
    this.projectService.getProjectByidApi(this.projectId).subscribe(resp=>{
      if(resp.status==200)
      {
        this.Technology=resp.data.Technology;
        this.ProjectTitle=resp.data.ProjectTitle;
        this.FrontEnd=resp.data.FrontEnd;
        this.BackEnd=resp.data.BackEnd;
        this.CompletionDate=resp.data.CompletionDate;
        this.StartDate=resp.data.StartDate;
        this.EstimatedHour=resp.data.EstimatedHour;
        this.TotalUtilizedHour=resp.data.TotalUtilizedHour;
        this.Status=resp.data.Status._id;
      }
    },err=>
      {
        console.log(err);
        ts.error("Something went wrong, try again!","",{timeOut:3000})
    })
  }
  ngOnInit(): void {
    this.projectService.getAllStatusApi().subscribe(resp => {
      this.Statuses = resp.data;
      //console.log(this.Statuses);

    })
}   

  updateProject()
  {
    let project={
      "projectId":this.projectId,
      "ProjectTitle":this.ProjectTitle,
      "Technology":this.Technology,
      "FrontEnd":this.FrontEnd,
      "BackEnd":this.BackEnd,
      "CompletionDate":this.CompletionDate,
      "StartDate":this.StartDate,
      "EstimatedHour":this.EstimatedHour,
      "TotalUtilizedHour":this.TotalUtilizedHour,
      "Status":this.Status
    }

    this.projectService.updateProjectApi(project).subscribe(resp=>{
      this.ts.success("PROJECT MODIFIED","",{timeOut:3000})
      this.router.navigateByUrl("/admin/listprojects")
    },err=>{
      console.log(err)
      this.ts.error("Something went wrong, try again!","",{timeOut:3000})
    })
  }
}
