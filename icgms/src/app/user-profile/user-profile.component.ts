import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  constructor( private services : LoginService){

  }



  // userData: any= {
  //   "email": "jasim@superadmin.com",
  //   "first_name": "Md",
  //   "last_name": "Jasim",
  //   "contact_number": 9234567890,
  //   "role_type": "ADMIN",
  //   "user_type": "SUPERADMIN"
  // }

  userData : any

  ngOnInit(): void {
    this.services.getUserDetail().subscribe((res)=>{
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        this.userData = res
      })
  }


}




























// this.services.getUserDetail().subscribe((res)=>{
//   console.log('====================================');
//   console.log(res);
//   console.log('====================================');
//   this.userData = res
// })
