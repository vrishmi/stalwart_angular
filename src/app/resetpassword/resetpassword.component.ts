import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  email=""
  password=""
  otp=""
  constructor(private sessionService:SessionService,private router:Router) { }

  ngOnInit(): void {
  }
  resetpassword()
  {
    let user={
      "email":this.email,
      "otp":this.otp,
      "password":this.password 
    }
    this.sessionService.resetPasswordApi(user).subscribe(resp=>{
      if(resp.status==-1)
      {
        alert(resp.msg);
      }
      else
      {
        alert(resp.msg);
        this.router.navigateByUrl("/login")
      }
    })
  }
}
