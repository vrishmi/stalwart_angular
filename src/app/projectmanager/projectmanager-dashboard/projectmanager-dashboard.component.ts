import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/admin/service/project.service';
import { ProjectuserService } from '../service/projectuser.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-projectmanager-dashboard',
  templateUrl: './projectmanager-dashboard.component.html',
  styleUrls: ['./projectmanager-dashboard.component.css']
})
export class ProjectmanagerDashboardComponent implements OnInit {

  constructor(private projectService:ProjectuserService) { }
  chart:any
  hours:Array<any> = []
  projects:Array<any> = []
  onprojects:Array<any> = []
  pipeprojects:Array<any> = []
  overdueprojects:Array<any>=[]
  completedprojects:Array<any>=[]
  currentYearProjects:Array<any> = []
  TotalEstimatedHour:Array<any>=[]
  totalUti=0
  totalProjects=0
  totalonProjects=0
  totalpipeProjects=0
  totaloverdueProjects=0
  totalcompletedProjects=0
  currentYearTotalPro=0
  totalEstimate=0
  exp: Array<number> = [1,3,5]
 
  //currentYearTotalProjects = 0 ;
  ngOnInit(): void {
    this.projectService.getThisMonthProjectApi().subscribe(resp=>{
      this.projects = resp.data;
      console.log(this.projects);
      this.totalProjects=this.projects.length
      
    })
  
    /*this.projectService.getCurrentYearProjects().subscribe(resp=>{
        this.currentYearProjects = resp.data; 
        for(let i=0;i<this.currentYearProjects.length;i++){
           this.currentYearTotalPro = this.currentYearTotalPro + this.currentYearProjects[i].amount; 
        }
    })*/
    let userId=localStorage.getItem("userId")
    this.projectService.getAllProjectApiByPm(userId).subscribe(resp=>{
      this.projects=resp.data
      console.log(this.projects);
      this.totalProjects=this.projects.length
    })

    this.projectService.getAllProjectApiByPm(userId).subscribe(resp=>{
      this.projects = resp.data;
      console.log(this.projects);
      for(let i=0;i<this.projects.length;i++){
        this.totalUti  = this.totalUti + parseInt(this.projects[i].TotalUtilizedHour);
      }
    })

    this.projectService.getAllProjectApiByPm(userId).subscribe(resp=>{
      this.projects = resp.data;
      console.log(this.projects);
      for(let i=0;i<this.projects.length;i++){
        this.totalEstimate  = this.totalEstimate + parseInt(this.projects[i].EstimatedHour);
      }
    })
    this.chart=new Chart("chart",{
      type:"bar",
      data:{
        labels:["Total Projects","Total Utilized Hours","Total Utilized Hours"],
        datasets:[{
          label:"Projects",
          data:this.exp ,
          //data:[this.totalProjects,this.totalUti],
          backgroundColor:["purple","pink","red"]
        }]
      }
    })
  }
}
