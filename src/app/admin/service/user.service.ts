import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.httpClient.delete("http://localhost:9091/deleteuser/"+userId)
  }
}
