import { Component } from '@angular/core';
import { TaskdService } from '../service/taskd.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-developer-dashboard',
  templateUrl: './developer-dashboard.component.html',
  styleUrls: ['./developer-dashboard.component.css']
})
export class DeveloperDashboardComponent {

  constructor(private taskservice:TaskdService){}
  chart:any
  chart1:any
  tasks:Array<any>=[]
  remhours=0
  totalUti=0
  totalEstimate=0
  totalTasks=0
  Task=-1

  
  ngOnInit(): void {

    let userId=localStorage.getItem("userId")
    this.taskservice.getAllTaskApi(userId).subscribe(resp=>{
      this.tasks = resp.data;
      console.log(this.tasks);
    })
  }

  getChart()
  {
    let userId=localStorage.getItem("userId")
    this.taskservice.getAllTaskApi(userId).subscribe(resp=>{
      this.tasks = resp.data;
      console.log(this.tasks);
      for (let index = 0; index < this.tasks.length; index++) {
        if(this.tasks[index]._id==this.Task)
        { 
          console.log(this.tasks[index].EstimatedHour);
          let remhours=this.tasks[index].EstimatedHour-this.tasks[index].UtilizedHour
          this.chart=new Chart("chart",{
            type:"pie",
            data:{
              labels:["Total Remaining Hours","Total Utilized Hours","Total Estimated Hours"],
              datasets:[{
                 label:"Projects",
                data:[remhours,this.tasks[index].UtilizedHour,this.tasks[index].EstimatedHour],
                backgroundColor:["purple","pink","skyblue"]
              }]
            }
          })
          this.chart1=new Chart("chart1",{
            type:"line",
            data:{
              labels:["Total Remaining Hours","Total Utilized Hours","Total Estimated Hours"],
              datasets:[{
                 label:"Projects",
                data:[remhours,this.tasks[index].UtilizedHour,this.tasks[index].EstimatedHour],
                backgroundColor:["purple","pink","skyblue"]
              }]
            }
          })
        }    
          
      }
      this.remhours=this.totalEstimate-this.totalUti
      this.totalTasks=this.tasks.length
      //data:[this.tasks[index].remhours,this.tasks[index].totalUti,this.tasks[index].totalEstimate]
   
    })
  }

//     type:"pie"
// type:"polarArea"
// type:"doughnut"
}
