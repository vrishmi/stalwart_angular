import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectuserService } from '../service/projectuser.service';

@Component({
  selector: 'app-status-report',
  templateUrl: './status-report.component.html',
  styleUrls: ['./status-report.component.css']
})
export class StatusReportComponent {
  Status="-1"
  Project="-1"
  Statuses:Array<any>=[]
  Projects:Array<any>=[]

  dtoptions: any = {}

  constructor(private projectService:ProjectuserService,private router:Router,private tr:ToastrService) {
    let userId=localStorage.getItem("userId")
    this.projectService.getProjectByStatusidApi(this.Status,userId).subscribe(resp => 
      {
        //this.Projects = resp.data; 
        console.log(this.Projects);  
        this.dtoptions = {

          search: {
            return: true,
          },
          dom: 'Bfrtip',
          buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
          ],
          export:true
          // exportOptions: {
          //     rows: ':visible'
          //   }
        }
      })
   }

  ngOnInit(): void 
  {
    this.projectService.getAllStatusApi().subscribe(resp => 
    {
      this.Statuses = resp.data; 
      console.log(this.Statuses);
    })
   
    /*this.projectService.getAllProjectApi().subscribe(resp => 
    {
      this.Projects = resp.data; 
      console.log(this.Projects);  
    })*/ 
  }
  getProject()
  {
    let userId=localStorage.getItem("userId")
    // this.projectService.getProjectByStatusidApi(userId,this.Status).subscribe(resp => 
    //   {
    //     this.Projects = resp.data; 
    //     console.log(this.Projects);  
    //   })

      this.projectService.getProjectByStatusidApi(userId,this.Status).subscribe(resp => 
        {
          this.Projects = resp.data; 
          console.log(this.Projects);  
          this.dtoptions = {
  
            search: {
              return: true,
            },
            dom: 'Bfrtip',
            buttons: [
              'copy', 'csv', 'excel', 'pdf', 'print'
            ],
            export:true,
            exportOptions: {
                rows: ':visible'
              }
          }
        })
  }
  
}
