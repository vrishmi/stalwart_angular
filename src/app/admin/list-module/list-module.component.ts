import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModuleService } from '../service/module.service';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.css']
})
export class ListModuleComponent {
  constructor(private moduleService:ModuleService,private toastrService:ToastrService)
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
  deleteModule(moduleId:any,module_name:string)
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
  }
}

