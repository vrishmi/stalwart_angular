import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModulepmService {

  constructor(private httpClient:HttpClient) { }
  getAllProjectApi():Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/getprojectUser")
  }
  getAllProjectApiByPm(userId:any):Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/getprojectUserBypm/"+userId)
  }
  getProjectByidApi(projectId:any):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getprojectbyid/"+projectId)
  }
  getModuleByProjectApi(Project:any):Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/getmodulebyprojectid/"+Project)
  }
  getTaskByModuleApi(Module:any):Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/gettaskbymoduleid/"+Module)
  }
  getAllModuleApi():Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+"/getmodule")
  }
  getAllStatusApi():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getstatus");
  }
  addModuleApi(module: any) :Observable<any> {
    return this.httpClient.post(environment.apiUrl+"/module",module)
  }
  getModuleByidApi(moduleId:any):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getmodulebyid/"+moduleId)
  }
  updateModuleApi(module:any):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/umodule",module);
  }
  deleteModuleApi(moduleId:any):Observable<any>{
    return this.httpClient.delete(environment.apiUrl+"/dmodule/"+moduleId);
  }
}
