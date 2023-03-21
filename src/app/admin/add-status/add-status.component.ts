import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StatusService } from '../service/status.service';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.css']
})
export class AddStatusComponent {
  statusName=""
  
  StatusNameError = ""
  constructor(private statusService:StatusService,private router:Router,private tr:ToastrService) { }

  

  saveStatus() 
  {

    let isError = false
    
    if (this.statusName == "" || this.statusName.trim().length == 0) {
      
      this.StatusNameError = "Please Enter Status"
      isError = true
    } else {
      this.StatusNameError = ""
    }

  
    
    if (isError == true) {
      console.log("error")
    } 
    else 
    {
      //api call and save data into db 
      let status = 
      {
        "statusName":this.statusName,
        //"Status":this.Status,
      }

      this.statusService.addStatusApi(status).subscribe(resp => {
        console.log(resp);
        if (resp.status == 200) {
          this.tr.success("Status Successfully Added","",{timeOut:3000})
          this.router.navigateByUrl("/admin/liststatus")
        } else {
          alert("SMWR")
        }

      });
    
    }

  }

}
