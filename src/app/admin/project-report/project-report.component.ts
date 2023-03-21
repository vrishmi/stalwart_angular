import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../service/project.service';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-project-report',
  templateUrl: './project-report.component.html',
  styleUrls: ['./project-report.component.css']
})
export class ProjectReportComponent {
  
  Status="-1"
  Project="-1"
  Statuses:Array<any>=[]
  Projects:Array<any>=[]

  dtOptions: any = { }

  constructor(private projectService:ProjectService,private router:Router,private tr:ToastrService) {
    this.projectService.getProjectByStatusidApi(this.Status).subscribe(resp => 
      {
        this.Projects = resp.data; 
        console.log(this.Projects);  
        this.dtOptions = {

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

  ngOnInit(): void 
  {
    this.projectService.getAllStatusApi().subscribe(resp => 
    {
      this.Statuses = resp.data; 
      console.log(this.Statuses);
    })
   
    this.projectService.getAllProjectApi().subscribe(resp => 
    {
      this.Projects = resp.data; 
      console.log(this.Projects);  
    })
    
  }
  getProject()
  {
    this.projectService.getProjectByStatusidApi(this.Status).subscribe(resp => 
      {
        this.Projects = resp.data; 
        console.log(this.Projects);  
      })
  }
  
}
