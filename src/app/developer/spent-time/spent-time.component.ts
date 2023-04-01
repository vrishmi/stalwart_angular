import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/service/project.service';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-spent-time',
  templateUrl: './spent-time.component.html',
  styleUrls: ['./spent-time.component.css']
})
export class SpentTimeComponent {
  
  CompletionDate =""
  StartDate =""
 
  DefaultVal=""
 
  CompletionDateError =""
  StartDateError =""
 
  constructor(private sessionService:SessionService,private projectService:ProjectService,private toastrService:ToastrService,private router:Router)
  {}
     
  saveProject()
  {
    let isError = false

   
   
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
   
    if (isError == true) {
      console.log("error")
    }
    else 
    {
      let data={
      
        "CompletionDate":this.CompletionDate,
        "StartDate":this.StartDate,
       
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
