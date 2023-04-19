import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient:HttpClient) { }
  addProjectApi(data:any):Observable<any>
  {
    return this.httpClient.post(environment.apiUrl+"/addproject",data)
  }
  addProjectUserApi(data:any):Observable<any>
  {
    return this.httpClient.post(environment.apiUrl+"/addprojectUser",data)
  }
  getAllProjectApi():Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/getproject")
  }
  getAllUserApi():Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/getpmusers")
  }
  getAllStatusApi():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getstatus");
  }
  getProjectByidApi(projectId:any):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getprojectbyid/"+projectId)
  }
  getProjectByStatusidApi(statusId:any):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getprojectbystatusid/"+statusId)
  }
  updateProjectApi(project:any):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/uproject",project);
  }
  deleteProjectApi(projectId:any):Observable<any>{
    return this.httpClient.delete(environment.apiUrl+"/dproject/"+projectId);
  }
  getThisMonthProjectApi(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/getthismonthproject")
  }
  getOngoingProjectApi():Observable<any> {
    return this.httpClient.get(environment.apiUrl+"/getongoingprojects")
  }
  getPipelineProjectApi():Observable<any> {
    return this.httpClient.get(environment.apiUrl+"/getpipelineprojects")
  }
  getOverdueProjectApi():Observable<any> {
    return this.httpClient.get(environment.apiUrl+"/getoverdueprojects")
  }
  getCompeletedProjectApi():Observable<any> {
    return this.httpClient.get(environment.apiUrl+"/getcompletedprojects")
  }
  getPendingProjectApi() :Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getpendingprojects")
  }
  
}
