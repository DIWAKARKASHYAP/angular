import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})


// "id": 0,
// "login_id": 0,
// "ref_id": 0,
// "user_type_id": 0,
// "role_type": "string",
// "first_name": "string",
// "last_name": "string",
// "department_id": 0,
// "designation_id": 0,
// "contact_number": 0,
// "branch_name": "string",
// "branch_code": "string"

export class AddUserComponent implements OnInit {

  addUserForm = new FormGroup({
    first_name: new FormControl('', [ Validators.required],),
    last_name: new FormControl('', [ Validators.required],),
    email: new FormControl('', [Validators.required, Validators.email],),
    contact_number: new FormControl('', [ Validators.required, Validators.maxLength(10)],),
    department_id: new FormControl('', [ Validators.required],),
    designation_id: new FormControl('', [ Validators.required],),
    role_type: new FormControl('', [ Validators.required]),
    user_type: new FormControl("SUPERADMIN")
  });


  constructor(private  userServices: UserService , private  route:Router) {

  }

  ngOnInit(): void {}

  onSubmit(){
    // console.log(this.addUserForm.value)

    this.userServices.addNewUser(this.addUserForm.value).subscribe((res)=>{
      console.log('====================================');
      console.log(res);
      console.log('====================================');
    })

  }


}
