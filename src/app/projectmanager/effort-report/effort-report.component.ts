import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectuserService } from '../service/projectuser.service';

@Component({
  selector: 'app-effort-report',
  templateUrl: './effort-report.component.html',
  styleUrls: ['./effort-report.component.css']
})
export class EffortReportComponent {
  dtOptions: any = { }
  constructor(private projectService:ProjectuserService,private toastrService:ToastrService)
{
  let userId=localStorage.getItem("userId")
  this.projectService.getAllProjectApiByPm(userId).subscribe(resp => {
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
  let userId=localStorage.getItem("userId")
  // this.projectService.getAllProjectApiByPm(userId).subscribe(resp => {
  //   this.project = resp.data;
  //   console.log(this.project);})

    this.projectService.getAllProjectApiByPm(userId).subscribe(resp => {
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

}
