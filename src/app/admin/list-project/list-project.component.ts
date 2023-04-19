import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent {
  constructor(private projectService:ProjectService,private toastrService:ToastrService)
{
 
}
project:Array<any>=[]
Status:Array<any>=[]
ngOnInit(): void {

  this.projectService.getAllProjectApi().subscribe(resp => {
    this.project = resp.data;
    console.log(this.project);
    
  })
}
  /*this.projectService.getAllStatusApi().subscribe(resp =>{
    this.Status=resp.data;
    console.log(this.Status);
  })*/
  deleteProject(projectId:any,ProjectTitle:string)
  {
    //alert("delete call..."+projectId)
    if(confirm("Are you sure you want to delete project "+ProjectTitle))
    {
        this.projectService.deleteProjectApi(projectId).subscribe(resp=>{
        console.log(resp);
        this.toastrService.success("Project Successfully Deleted","",{timeOut:5000})
        setTimeout(function(){
          location.reload();
        },1000)
        
      })
    }
  }

}
