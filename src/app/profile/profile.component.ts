import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../admin/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
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
