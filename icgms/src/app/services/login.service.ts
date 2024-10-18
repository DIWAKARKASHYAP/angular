import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  login(data:any){
    let body = {
      email:data.email,
      password:data.password,
    }
    return this.http.post(`https://dev-api.icgms.sharajman.com/get_count_user`, body)

  }

  getToken(data:any , role_id:any){
    let body = {
      email:data.email,
      password:data.password,
    }
    return this.http.post(`https://dev-api.icgms.sharajman.com/token/${role_id}`, body)

  }

  getUserDetail(){
    let token = localStorage.getItem("TOKEN_ICGMS")
    return this.http.post(`https://dev-api.icgms.sharajman.com/get-active-user-details`,{}, {headers:{
       'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    }})
  }

}
