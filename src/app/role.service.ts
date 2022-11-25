import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) {

   }
   roleApi(data:any):Observable<any>
   {
      return this.http.post("http://localhost:9091/role",data)
   }
}
