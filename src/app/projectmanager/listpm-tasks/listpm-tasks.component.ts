import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TaskpmService } from '../service/taskpm.service';

@Component({
  selector: 'app-listpm-tasks',
  templateUrl: './listpm-tasks.component.html',
  styleUrls: ['./listpm-tasks.component.css']
})
export class ListpmTasksComponent {
  moduleId:string=""
  constructor(private taskService:TaskpmService,private toastrService:ToastrService,private ar:ActivatedRoute)
  {
    this.moduleId=ar.snapshot.params["moduleId"];
  }
  task:Array<any>=[]
  module:Array<any>=[]
  Status:Array<any>=[]
  ngOnInit(): void {
  
    this.taskService.getTaskByModuleidApi(this.moduleId).subscribe(resp => {
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
          
        }) 
      }
    }
  
  }
