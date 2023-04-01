import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string =""
  password:string=""
  

  constructor(private router:Router,private sessionService:SessionService) { }
  ngOnInit(): void {
    console.log("Login....component....");
  }

  login()
  {
    console.log(this.email);
    console.log(this.password);

    let user=
    {
      "email":this.email,
      "password":this.password,
      //"Role": "62c95db4d987329c27833c61"
      //"62c95db4d987329c27833c63"
    }
    this.sessionService.loginApi(user).subscribe(resp=>{
      if(resp.status ==-1)
      {
        alert("invalid credentials")
      }
      else
      {
        console.log(resp.data);
        localStorage.setItem("userId",resp.data._id)
        localStorage.setItem("token",resp.data.token1)
        //console.log(resp);
        if(resp.data.Role.RoleName=="Admin")
        {
          this.router.navigateByUrl("/admin/dashboard")
        }
        else if(resp.data.Role.RoleName=="Project Manager")
        {
          this.router.navigateByUrl("/projectmanager/dashboard")
        }
        else if(resp.data.Role.RoleName=="Developer")
        {
          this.router.navigateByUrl("/developer/dashboard")
        }
        alert("valid Credentials")
      }
    });
  }
}