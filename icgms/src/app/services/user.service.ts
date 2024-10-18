import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

editUserData : any
  getAllUserList(){

    let token = localStorage.getItem("TOKEN_ICGMS")

    let data= {
      "page_number": 1,
      "record_per_page": 10,
      "user_type": "string"
    }
    return this.http.post(`https://dev-api.icgms.sharajman.com/get-all-user-list`,data, {headers:{
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    }})
  }

  addNewUser(data: any){

    let token = localStorage.getItem("TOKEN_ICGMS")

    return this.http.post(`https://dev-api.icgms.sharajman.com/add-user`,data, {headers:{
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    }})
  }

  setEditUserData(data:any){
    this.editUserData = data
  }



  getEditUserData(){
    return this.editUserData
  }




  editUserDetail(data:any){

    this.editUserData.role_type=data.role_type
    this.editUserData.first_name=data.first_name
    this.editUserData.last_name=data.last_name
    this.editUserData.department_id=data.department_id
    this.editUserData.designation_id=data.designation_id
    this.editUserData.contact_number=data.contact_number



    let token = localStorage.getItem("TOKEN_ICGMS")

    return this.http.post(`https://dev-api.icgms.sharajman.com/update-all-type-user_details`,this.editUserData, {headers:{
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    }})

  }



}
