import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  getAllUsersApi():Observable<any>{
    return this.httpClient.get("http://localhost:9091/userg");
  }

  getAllRolesApi():Observable<any>{
    return this.httpClient.get("http://localhost:9091/getrole");
  }
  deleteUserApi(userId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:9091/userd/"+userId);
  }
  getUserByidApi(userId:any):Observable<any>{
    return this.httpClient.get("http://localhost:9091/getuserbyid/"+userId)
  }
  updateUserApi(user:any):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/useru",user);
  }
}
