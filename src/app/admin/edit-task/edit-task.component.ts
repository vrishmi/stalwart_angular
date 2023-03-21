import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModuleService } from '../service/module.service';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  taskId:string=""
  TaskTitle=""
  StartDate=""
  CompletionDate=""
  EstimatedHour=""
  UtilizedHour =""
  Module=""
  Status=""
  Statuses:Array<any>=[]
  Modules:Array<any>=[]

  constructor(private router:Router,private ar:ActivatedRoute,private taskService:TaskService,private ts:ToastrService)
  {
    this.taskId=ar.snapshot.params["taskId"];
    
    this.taskService.getTaskByidApi(this.taskId).subscribe(resp=>{
      if(resp.status==200)
      {
        this.TaskTitle=resp.data.TaskTitle;
        this.StartDate=resp.data.StartDate;
        this.CompletionDate=resp.data.CompletionDate;
        this.EstimatedHour=resp.data.EstimatedHour;
        this.UtilizedHour=resp.data.UtilizedHour;
        this.Status=resp.data.Status._id;
      }
    },
    err=>
    {
      console.log(err);
      ts.error("Something went wrong, try again!","",{timeOut:3000})
    })
  }
  ngOnInit(): void {
    this.taskService.getAllStatusApi().subscribe(resp => {
      this.Statuses = resp.data;
      console.log(this.Statuses);
    })
    
    this.taskService.getAllModuleApi().subscribe(resp => 
      {
        this.Modules = resp.data; 
        console.log(this.Modules);  
      })
}   

  updateTask()
  {
    let task={
      "taskId":this.taskId,
      "TaskTitle":this.TaskTitle,
      "StartDate":this.StartDate,
      "CompletionDate":this.CompletionDate,
      "EstimatedHour":this.EstimatedHour,
      "UtilizedHour":this.UtilizedHour,
      "Status":this.Status
    }

    this.taskService.updateTaskApi(task).subscribe(resp=>{
      this.ts.success("TASK MODIFIED","",{timeOut:3000})
      this.router.navigateByUrl("/admin/listtasks")
    },err=>{
      console.log(err)
      this.ts.error("Something went wrong, try again!","",{timeOut:3000})
    })
  }

}
