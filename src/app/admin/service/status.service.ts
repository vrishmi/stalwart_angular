import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private httpClient:HttpClient) { }

  getAllStatusApi():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getstatus");
  }
  deleteStatusApi(statusId:any):Observable<any>{
    return this.httpClient.delete(environment.apiUrl+"/dstatus/"+statusId);
  }
  addStatusApi(status: any) :Observable<any> {
    return this.httpClient.post(environment.apiUrl+"/status",status)
  }
  updateStatusApi(status:any):Observable<any>
  {
    return this.httpClient.put(environment.apiUrl+"/ustatus",status);
  }
  
  getStatusByidApi(statusId:any):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getstatusbyid/"+statusId)
  }
}
