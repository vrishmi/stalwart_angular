import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  /*RoleName:string=""
  RoleNameError:string=""
  constructor(private router:Router,private RoleService:RoleService) { }*/

  ngOnInit(): void {

  }

  /*addrole()
    {
        console.log(this.RoleName);

        let isError=false
       if(this.RoleName=="" || this.RoleName.trim().length==0)
         {
          isError=true;
          this.RoleNameError ="Please Enter RoleName"
        }
        else{
          this.RoleNameError=""
        }

        if(isError== true)
        {
          console.log("Error");
        }
        else{
          let data=
          {
            "RoleName":this.RoleName,
            "role": "62c95dabd987329c27833c61"
          }
          this.RoleService.roleApi(data).subscribe(resp=>{
          console.log("Api response");
          console.log(resp);
          });
        //this.router.navigateByUrl("/l");
       }
    }*/
   
  }
