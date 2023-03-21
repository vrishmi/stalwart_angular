import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/session.service';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  Technology =""
  ProjectTitle=""
  FrontEnd="" 
  BackEnd =""
  CompletionDate =""
  StartDate =""
  EstimatedHour =""
  TotalUtilizedHour ="0"
  Status="-1"
  Statuses:Array<any>=[]
  DefaultVal=""
  TechnologyError =""
  ProjectTitleError=""
  FrontEndError="" 
  BackEndError =""
  CompletionDateError =""
  StartDateError =""
  EstimatedHourError =""
  TotalUtilizedHourError =""
  StatusError=""
  constructor(private sessionService:SessionService,private projectService:ProjectService,private toastrService:ToastrService,private router:Router)
  {}
    ngOnInit(): void {
      this.projectService.getAllStatusApi().subscribe(resp => {
        this.Statuses = resp.data;
        console.log(this.Statuses);
  
      })
  }   
  saveProject()
  {
    let isError = false

    if (this.Technology == "" || this.Technology.trim().length == 0) {
      isError = true
      this.TechnologyError = "Please Enter Technology"
      
    } else {
      this.TechnologyError = ""
    }
    if (this.ProjectTitle == "" || this.ProjectTitle.trim().length == 0) {
      isError = true
      this.ProjectTitleError = "Please Enter ProjectTitle"
      
    } else {
      this.ProjectTitleError = ""
    }
    if (this.FrontEnd == "" || this.FrontEnd.trim().length == 0) {
      isError = true
      this.FrontEndError = "Please Enter FrontEnd"
      
    } else {
      this.FrontEndError = ""
    }
    if (this.BackEnd == "" || this.BackEnd.trim().length == 0) {
      isError = true
      this.BackEndError = "Please Enter BackEnd"
      
    } else {
      this.BackEndError = ""
    }
    if (this.CompletionDate == "" || this.CompletionDate.trim().length == 0) {
      isError = true
      this.CompletionDateError = "Please Enter CompletionDate"
      
    } else {
      this.CompletionDateError = ""
    }
    if (this.StartDate == "" || this.StartDate.trim().length == 0) {
      isError = true
      this.StartDateError = "Please Enter StartDate"
      
    } else {
      this.StartDateError = ""
    }
    if (this.EstimatedHour == "" ) {
      isError = true
      this.EstimatedHourError = "Please Enter EstimatedHour"
      
    } else {
      this.EstimatedHourError = ""
    }
    
    if (this.Status == "" || this.Status.trim().length == 0|| this.Status== "-1") {
      isError = true
      this.StatusError = "Please Enter Status"
      
    } else {
      this.StatusError = ""
    }
    if (isError == true) {
      console.log("error")
    }
    else 
    {
      let data={
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
      //console.log(data);
      this.projectService.addProjectApi(data).subscribe(resp=>{
        console.log(resp)
        if (resp.status == 200) {
          this.router.navigateByUrl("/admin/listusers")
        } else {
          alert("SMWR")
        }

      this.toastrService.success("Project Successfully Added","",{timeOut:3000})
      this.router.navigateByUrl("admin/listprojects")
      })
  
    }

  }
}
