import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.css'
})
export class ManageUserComponent implements OnInit {


  constructor( private UserService : UserService , private route: Router){}

  usersData : any

  ngOnInit(): void {
    this.UserService.getAllUserList().subscribe((res: any)=>{
      let data = res.value
      console.log(data)
      this.usersData = res.value
    })
  }

  editUser(value: any){
console.log(value)
this.UserService.setEditUserData(value)

console.log(this.UserService.getEditUserData())

this.route.navigateByUrl("manage-users/update-user")

}

}
