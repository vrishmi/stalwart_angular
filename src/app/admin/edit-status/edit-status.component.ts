import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StatusService } from '../service/status.service';

@Component({
  selector: 'app-edit-status',
  templateUrl: './edit-status.component.html',
  styleUrls: ['./edit-status.component.css']
})
export class EditStatusComponent {
  statusId:string=""
  statusName=""
  //statusName:Array<any>=[]
  Statuses:Array<any>=[]
  Status=""

  constructor(private router:Router,private ar:ActivatedRoute,private statusService:StatusService,private ts:ToastrService)
  {
    this.statusId=ar.snapshot.params["statusId"];
    
    this.statusService.getStatusByidApi(this.statusId).subscribe(resp=>{
      if(resp.status==200)
      {
        this.statusName=resp.data.statusName;
      }
    },
    err=>
    {
      console.log(err);
      ts.error("Something went wrong, try again!","",{timeOut:3000})
    })
  }
  ngOnInit(): void {
    this.statusService.getAllStatusApi().subscribe(resp => {
      this.Statuses = resp.data;
      console.log(this.Statuses);
    })
}   

  updateStatus()
  {
    let status={
      "statusId":this.statusId,
      "statusName":this.statusName,
      //"Status":this.Status
    }

    this.statusService.updateStatusApi(status).subscribe(resp=>{
      this.ts.success("STATUS MODIFIED","",{timeOut:3000})
      this.router.navigateByUrl("/admin/liststatus")
    },err=>{
      console.log(err)
      this.ts.error("Something went wrong, try again!","",{timeOut:3000})
    })
  }
}
