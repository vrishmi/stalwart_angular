import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient:HttpClient) { }
  getAllModuleApi():Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/getmodule")
  }
  getModuleByProjectApi(Project:any):Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/getmodulebyprojectid/"+Project)
  }
  addTaskApi(task: any) :Observable<any> {
    return this.httpClient.post(environment.apiUrl+"/task",task)
  }
  getAllStatusApi():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getstatus");
  }
  getAllTaskApi():Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/gettask")
  }
  getAllProjectApi():Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/getproject")
  }
  updateTaskApi(task:any):Observable<any>
  {
    return this.httpClient.put(environment.apiUrl+"/utask",task);
  }
  deleteTaskApi(taskId:any):Observable<any>{
    return this.httpClient.delete(environment.apiUrl+"/dtask/"+taskId);
  }
  getTaskByidApi(taskId:any):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/gettaskbyid/"+taskId)
  }
}
