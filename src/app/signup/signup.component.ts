import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName = ""
  email = ""
  lastName = ""
  password = "" 

  firstNameError = "" 
  lastNameError = ""
  emailError = ""
  passwordError = "" 

  constructor(private sessionService:SessionService,private router:Router) { }
  

  ngOnInit(): void {
  }
  signup(){

    let isError = false 
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.email);
    console.log(this.password);

    if(this.firstName == "" || this.firstName.trim().length == 0 ){
        this.firstNameError = "Please Enter FirstName"
        isError = true 
    }else{
        this.firstNameError = ""
    }

    if(this.lastName == "" || this.lastName.trim().length == 0  ){
      this.lastNameError = "Please Enter LastName"
      isError = true 
    }else{
      this.lastNameError = ""
    }

    if(this.email == "" || this.email.trim().length == 0 ){
      this.emailError = "Please Enter Email"
      isError = true 
    }else{
      this.emailError = ""
    }

    
    if(this.password == ""  || this.password.trim().length == 0 ){
      this.passwordError = "Please Enter Password"
      isError = true 
    }else if(this.password.trim().length <= 3){
      this.passwordError = "Password contains atleast 4 characters"  
      isError = true 
    }else{
      this.passwordError = ""
    }



    //
    if(isError == true){
      //do nothing...
    }else{
       //api call and save data into db 
      let user = {"firstName":this.firstName,"lastName":this.lastName,"email":this.email,"password":this.password,"role":"62b9c4ee405221ef911914ef"}
      this.sessionService.signupApi(user).subscribe(resp=>{
         console.log(resp);
         if(resp.status == 200){
            // alert("signup done")
            this.router.navigateByUrl("/login")
         }else{
          // alert("SMWR")
         }
         
      });
      //
      //

      
    }



  }

}

