import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';
import * as config from "../../json/config.json"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl:string;
  isLogin : boolean = true;
  constructor(public http:HttpClient) {
    this.serverUrl = config.BaseUrl;
  }

   setLogin(){
    this.getToken();
    this.http.post(this.serverUrl+"/admin", JSON.stringify(this.user), this.httpOptions).subscribe(
      (response) => {
        console.log(response)
        localStorage.setItem("appToken", JSON.stringify(response));
      },
      (error) => {
        localStorage.removeItem("appToken");
      }
    )
  }

  getWithToken(url){
    localStorage.getItem("appToken")
    return this.http.get(this.serverUrl + url, this.httpOptions);
  }

  get(url){
    return this.http.get(this.serverUrl + url);
  }

  post(url, data, isFormData = false){

    if (isFormData){
      localStorage.getItem("appToken")
      //return this.http.post(this.serverUrl+url, data);
      this.getToken();
      const formData : FormData = new FormData();
      for(const property in data){
        formData.append(property, data[property])
      }
      return this.http.post(this.serverUrl + url, formData, this.httpOptions);
    }else{
      return this.http.post(this.serverUrl + url, data, this.httpOptions);
    }
  }

  put(url, data, isFormData = false){
    localStorage.getItem("appToken")
    //return this.http.post(this.serverUrl+url, data);
    this.getToken();
    if(isFormData){
      const formData : FormData = new FormData();
      for(const property in data){
        formData.append(property, data[property])
      }
      return this.http.put(this.serverUrl + url, formData, this.httpOptions);
    }else{
      return this.http.put(this.serverUrl + url, data, this.httpOptions);
    }
  }

  delete(url){
    console.log(url);
    localStorage.getItem("appToken")
    return this.http.delete(this.serverUrl + url, this.httpOptions);
  }

  
  

  
user: User;
  httpOptions: any;
  getToken(){
    const str = localStorage.getItem("appToken");
    if (str != null){
      this.user = JSON.parse(str);
      this.httpOptions={
      headers: new HttpHeaders({
      'Authorization': 'Bearer '+ this.user.token
      })
     }
    
  }
}
}
