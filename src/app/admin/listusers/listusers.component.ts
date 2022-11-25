import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: Array<any> = []
  ngOnInit(): void {

    this.userService.getAllUsersApi().subscribe(resp => {
      this.users = resp.data;
      console.log(this.users);
      
    })
  }
  deleteUser(userId:any){
    alert("delete call..."+userId)
    this.userService.deleteUserApi(userId).subscribe(resp=>{
        console.log(resp);
        
    })
  }
}