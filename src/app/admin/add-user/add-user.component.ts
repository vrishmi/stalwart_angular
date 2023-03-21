import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/session.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  firstName = ""
  email = ""
  lastName = ""
  password = ""
  Role = "-1"

  firstNameError = ""
  lastNameError = ""
  emailError = ""
  passwordError = ""

  Roles: Array<any> = []
  constructor(private sessionService:SessionService,private userService:UserService,private router:Router,private tr:ToastrService) { }

  ngOnInit(): void {
    this.userService.getAllRolesApi().subscribe(resp => {
      this.Roles = resp.data; 
      console.log(this.Roles);

    })
  }
  saveUser() 
  {

    let isError = false
    /*console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.email);
    console.log(this.password);
    console.log(this.Role);*/
    

    if (this.firstName == "" || this.firstName.trim().length == 0) {
      
      this.firstNameError = "Please Enter FirstName"
      isError = true
    } else {
      this.firstNameError = ""
    }

    if (this.lastName == "" || this.lastName.trim().length == 0) {
      
      this.lastNameError = "Please Enter LastName"
      isError = true
    } else {
      this.lastNameError = ""
    }

    if (this.email == "" || this.email.trim().length == 0) {
     
      this.emailError = "Please Enter Email"
      isError = true
    } else {
      this.emailError = ""
    }

    if (this.password == "" || this.password.trim().length == 0) {
      
      this.passwordError = "Please Enter Password"
      isError = true
    } 
    else if (this.password.trim().length <= 3) {
      this.passwordError = "Password contains atleast 4 characters"
      isError = true
    } 
    else {
      this.passwordError = ""
    }
  
    if (isError == true) {
      console.log("error")
    } 
    else 
    {
      //api call and save data into db 
      let user = {
        "firstName": this.firstName, 
        "lastName": this.lastName,
        "email": this.email,
        "password": this.password, 
        "Role":this.Role
        }
      this.sessionService.signupApi(user).subscribe(resp => {
        console.log(resp);
        if (resp.status == 200) {
          this.tr.success("User Successfully Added","",{timeOut:3000})
          this.router.navigateByUrl("/admin/listusers")
        } else {
          alert("SMWR")
        }

      });
    
    }

  }

}