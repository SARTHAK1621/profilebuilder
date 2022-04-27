import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl = "http://localhost:3000/";
  constructor(private httpClient: HttpClient) { 
  }

  login(id: any, password: any) 
  {
    return this.httpClient.post(this.apiUrl + "login", {id: id, password: password});
  }

  register(name:any,email:any,id:any,password:any)
  {
    return this.httpClient.post(this.apiUrl+"register",{name:name,email:email,id:id,password:password});
  }

  uploadImage(formData: FormData) {
    console.log("inside upload" )
    // console.log(formData.get(image))
    return this.httpClient.post(this.apiUrl+"uploadimage", formData);
  }
  updateabout(id:any,about:any)
  {
    return this.httpClient.post(this.apiUrl+"updateinfo",{id:id,about:about});
  }
  updatework(role:any,duration:any,about:any,company:any)
  {
    let userId = localStorage.getItem("Id");
    return this.httpClient.post(this.apiUrl+ "updatework", {role:role,duration:duration,about:about,id:userId,company:company});  
  }
  updatevolunteer(title:any,period:any,description:any)
  {
    let userId=localStorage.getItem("Id");
    return this.httpClient.post(this.apiUrl+"updatevol",{id:userId,title:title,period:period,description:description});
  }
  updateeducation(name:any,specialisation:any,duration:any,grade:any)
  {
    let userId=localStorage.getItem("Id");
    return this.httpClient.post(this.apiUrl+"updatevol",{id:userId,name:name,specialisation:specialisation,duration:duration});
  }

  getInfo(userId: any) {
    return this.httpClient.post(this.apiUrl+ "info", {userId: userId});
    
  }
  getWork(userId: any) {
    return this.httpClient.post(this.apiUrl+ "work", {userId: userId});
    
  }
  getVolunteer(userId:any)
  {
    return this.httpClient.post(this.apiUrl+"vol",{userId:userId});
  }
  
  
}
