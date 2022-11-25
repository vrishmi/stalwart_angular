import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private sessionService:SessionService,private router:Router) { }
  email = ""
  ngOnInit(): void {
  }
  forgetpassword() 
   { 
    let user = {"email":this.email}
    this.sessionService.forgetPasswordApi(user).subscribe(resp=>{
        if(resp.status == 200)
        {
          alert("OTP SENT");
          //alert(resp.data)
          this.router.navigateByUrl("/resetpassword")
        }
        else
        {
          alert("Invalid Email")
        }
    })
  }

}

