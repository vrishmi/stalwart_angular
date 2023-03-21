import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient) { 
  }
  signupApi(user: any) :Observable<any> {
    /*console.log("SignupApi Call -> ");
    console.log(user);*/
   return this.http.post("http://localhost:9091/user",user)
  }
  loginApi(data:any):Observable<any>
  {
    return this.http.post("http://localhost:9091/login",data)
  }
  forgetPasswordApi(user:any):Observable<any>
  {
    return this.http.post("http://localhost:9091/forgetPass",user)
  }
  resetPasswordApi(user:any):Observable<any>
  {
    return this.http.post("http://localhost:9091/resetPass",user)
  }
  
}
