import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent {
  constructor(private taskService:TaskService,private toastrService:ToastrService)
  {
   
  }
  task:Array<any>=[]
  module:Array<any>=[]
  Status:Array<any>=[]
  ngOnInit(): void {
  
    this.taskService.getAllTaskApi().subscribe(resp => {
      this.task = resp.data;
      console.log(this.task);
      
    })
  }
   
    deleteTask(taskId:any,TaskTitle:string)
    {
      
      if(confirm("Are you sure you want to delete task "+TaskTitle))
      {
          this.taskService.deleteTaskApi(taskId).subscribe(resp=>{
          console.log(resp);
          this.toastrService.success("Task Successfully Deleted","",{timeOut:3000})
          setTimeout(function(){
            location.reload();
          },1000)
          
        }) /*this.projectService.getAllStatusApi().subscribe(resp =>{
          this.Status=resp.data;
          console.log(this.Status);
        })*/
      }
    }
  
}
