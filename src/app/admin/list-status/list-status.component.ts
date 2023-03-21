import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StatusService } from '../service/status.service';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-list-status',
  templateUrl: './list-status.component.html',
  styleUrls: ['./list-status.component.css']
})
export class ListStatusComponent {
  constructor(private statusService:StatusService,private toastrService:ToastrService)
  {
   
  }
  status:Array<any>=[]
  Status:Array<any>=[]
  ngOnInit(): void {
  
    this.statusService.getAllStatusApi().subscribe(resp => {
      this.status = resp.data;
      console.log(this.status);
      
    })
  }
    
    deleteStatus(statusId:any,statusName:string)
    {
      
      if(confirm("Are you sure you want to delete module "+statusName))
      {
          this.statusService.deleteStatusApi(statusId).subscribe(resp=>{
          console.log(resp);
          this.toastrService.success("Status Successfully Deleted","",{timeOut:3000})
          setTimeout(function(){
            location.reload();
          },1000)
          
        })
      }
    }
  
}
