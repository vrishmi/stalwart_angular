import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-efforts-report',
  templateUrl: './efforts-report.component.html',
  styleUrls: ['./efforts-report.component.css']
})
export class EffortsReportComponent {
  dtOptions: any = { }
  constructor(private projectService:ProjectService,private toastrService:ToastrService)
{
  this.projectService.getAllProjectApi().subscribe(resp => {
    this.project = resp.data;
    console.log(this.project);
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
project:Array<any>=[]
Status:Array<any>=[]
ngOnInit(): void {

  this.projectService.getAllProjectApi().subscribe(resp => {
    this.project = resp.data;
    console.log(this.project);
    
  })
}
}
