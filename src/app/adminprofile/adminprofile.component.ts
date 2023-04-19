import { Component } from '@angular/core';
import { UserService } from '../admin/service/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent {
  firstName = ""
  lastName = ""
  email =""
  Role=""
  

  constructor(private userService:UserService,private router:Router,private tr:ToastrService) { }

  ngOnInit(): void 
  {
    let userId=localStorage.getItem("userId")
    this.userService.getUserByidApi(userId).subscribe(resp => 
    {
      console.log(resp.data);
      
      this.firstName=resp.data.firstName,
      this.lastName=resp.data.lastName,
      this.email=resp.data.email,
      this.Role=resp.data.Role.RoleName
    }) 
  
  }
}
