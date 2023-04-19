import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private projectService:ProjectService) { }

  hours:Array<any> = []
  projects:Array<any> = []
  onprojects:Array<any> = []
  pipeprojects:Array<any> = []
  overdueprojects:Array<any>=[]
  completedprojects:Array<any>=[]
  pendingprojects:Array<any>=[]
  //currentYearProjects:Array<any> = []
  totalUti=0
  totalProjects=0
  totalonProjects=0
  totalpipeProjects=0
  totaloverdueProjects=0
  totalcompletedProjects=0
  totalpendingProjects=0
  //currentYearTotalProjects = 0 ;
  ngOnInit(): void {
    this.projectService.getThisMonthProjectApi().subscribe(resp=>{
      this.projects = resp.data;
      console.log(this.projects);
      this.totalProjects=this.projects.length
      /*for(let i=0;i<this.projects.length;i++){
        this.totalExp  = this.totalExp + parseInt(this.expenses[i].amount);
      }*/
    })

    /*this.expService.getCurrentYearExp().subscribe(resp=>{
        this.cuurentYearExpense = resp.data; 
        for(let i=0;i<this.cuurentYearExpense.length;i++){
           this.currentYearTotalExp = this.currentYearTotalExp + this.cuurentYearExpense[i].amount; 
        }
    })*/
    this.projectService.getOngoingProjectApi().subscribe(resp=>{
      this.onprojects=resp.data
      console.log(this.onprojects);
      this.totalonProjects=this.onprojects.length
    })

    this.projectService.getPipelineProjectApi().subscribe(resp=>{
      this.pipeprojects=resp.data
      //console.log(this.onprojects);
      this.totalpipeProjects=this.pipeprojects.length
    })
    this.projectService.getOverdueProjectApi().subscribe(resp=>{
      this.overdueprojects=resp.data
      //console.log(this.onprojects);
      this.totaloverdueProjects=this.overdueprojects.length
    })

    this.projectService.getPendingProjectApi().subscribe(resp=>{
      this.pendingprojects=resp.data
      //console.log(this.onprojects);
      this.totalpendingProjects=this.pendingprojects.length
    })
    this.projectService.getCompeletedProjectApi().subscribe(resp=>{
      this.completedprojects=resp.data
      //console.log(this.onprojects);
      this.totalcompletedProjects=this.completedprojects.length
    })


   /* this.projectService.getThisMonthProjectApi().subscribe(resp=>{
      this.projects = resp.data;
      console.log(this.projects);
      for(let i=0;i<this.projects.length;i++){
        this.totalUti  = this.totalUti + parseInt(this.projects[i].TotalUtilizedHour);
      }
    })*/

    this.projectService.getAllProjectApi().subscribe(resp=>{
      this.projects = resp.data;
      console.log(this.projects);
      for(let i=0;i<this.projects.length;i++){
        this.totalUti  = this.totalUti + parseInt(this.projects[i].TotalUtilizedHour);
      }
    })
  }

}
