import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskdService {

  constructor(private httpClient:HttpClient) { }

  getAllTaskApi(userId:any):Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/gettaskusers/"+userId)
  }
  /*getAllProjectApiByPm(userId:any):Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/getprojectUserBypm/"+userId)
  }*/
  updateTaskApi(task:any):Observable<any>
  {
    return this.httpClient.put(environment.apiUrl+"/utask",task);
  }
  getTaskByidApi(taskId:any):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/gettaskbyid/"+taskId)
  }
  getAllStatusApi():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getstatus");
  }
  
}
