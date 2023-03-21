import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectuserService {
  constructor(private httpClient:HttpClient) { }
  /*addProjectApi(data:any):Observable<any>
  {
    return this.httpClient.post(environment.apiUrl+"/addproject",data)
  }*/
  getAllProjectApi():Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/getprojectUser")
  }
  getThisMonthProjectApi(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/getthismonthproject")
  }
  getAllProjectApiByPm(userId:any):Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/getprojectUserBypm/"+userId)
  }
  getCurrentYearProjects():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getcurrentyearprojects")
  }
  getModuleByProjectApi(projectId:any):Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/getmodulebyprojectid/"+projectId)
  }
  getProjectByStatusidApi(userId:any,statusId:any):Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/getprojectuserbystatusid/"+userId+"/"+statusId)
  }
  getAllStatusApi():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getstatus");
  }
  deleteProjectApi(projectId:any):Observable<any>{
    return this.httpClient.delete(environment.apiUrl+"/dproject/"+projectId);
  }
  getProjectByidApi(projectId:any):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getprojectbyid/"+projectId)
  }
  updateProjectApi(project:any):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/uproject",project);
  }
  getAllUserApi():Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/getpmusers")
  }
  getAllTaskUserApi():Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/gettaskusers")
  }
  addTaskUserApi(taskUser:any):Observable<any>
  {
    return this.httpClient.post(environment.apiUrl+"/addtaskUser",taskUser)
  }
}
