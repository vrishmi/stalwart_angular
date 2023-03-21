import { Component, OnInit } from '@angular/core';
import { Window } from 'selenium-webdriver';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
firstName=""
  constructor(private userService: UserService) { }
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
          console.log(resp);
          location.reload();
        })
      }
  }
}