import { Component, OnInit } from '@angular/core';
import { Window } from 'selenium-webdriver';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
firstName=""
hidden=false
  constructor(private userService: UserService ,private ts:ToastrService) { }
  users: Array<any> = []
  ngOnInit(): void {

    this.userService.getAllUsersApi().subscribe(resp => {
      this.users = resp.data;
      console.log(this.users);
      
    })
  }
  deleteUser(userId:any,firstName:string)
  {
    /*alert("delete call..."+userId)
    this.userService.deleteUserApi(userId).subscribe(resp=>{
        console.log(resp);*/
      if(confirm("Are you sure you want to delete "+firstName))
      {
          this.userService.deleteUserApi(userId).subscribe(resp=>{
              this.ts.success("USER DELETED","",{timeOut:3000})
            },err=>{
              this.ts.error("Something went wrong, try again!","",{timeOut:3000})
            })
          location.reload();
      
      }
  }
}