import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModulepmService } from '../service/modulepm.service';

@Component({
  selector: 'app-list-modulepm',
  templateUrl: './list-modulepm.component.html',
  styleUrls: ['./list-modulepm.component.css']
})
export class ListModulepmComponent {
  constructor(private moduleService:ModulepmService,private toastrService:ToastrService)
  {
   
  }
  module:Array<any>=[]
  Status:Array<any>=[]
  ngOnInit(): void {
  
    this.moduleService.getAllModuleApi().subscribe(resp => {
      this.module = resp.data;
      console.log(this.module);
      
    })
  }
    /*this.projectService.getAllStatusApi().subscribe(resp =>{
      this.Status=resp.data;
      console.log(this.Status);
    })*/
    /*deleteModule(moduleId:any,module_name:string)
    {
      //alert("delete call..."+projectId)
      if(confirm("Are you sure you want to delete module "+module_name))
      {
          this.moduleService.deleteModuleApi(moduleId).subscribe(resp=>{
          console.log(resp);
          this.toastrService.success("Module Successfully Deleted","",{timeOut:3000})
          setTimeout(function(){
            location.reload();
          },1000)
          
        })
      }
    }*/
}
