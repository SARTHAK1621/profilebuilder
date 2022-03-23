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
  
  
}
