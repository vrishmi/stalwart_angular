import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TaskdService } from '../service/taskd.service';

@Component({
  selector: 'app-listtaskd',
  templateUrl: './listtaskd.component.html',
  styleUrls: ['./listtaskd.component.css']
})
export class ListtaskdComponent {
  constructor(private taskService:TaskdService,private toastrService:ToastrService)
  {
   
  }
  task:Array<any>=[]
  module:Array<any>=[]
  Status:Array<any>=[]
  ngOnInit(): void {
    let userId=localStorage.getItem("userId")
    this.taskService.getAllTaskApi(userId).subscribe(resp => {
      this.task = resp.data;
      console.log(this.task);
      
    })
  }
}
