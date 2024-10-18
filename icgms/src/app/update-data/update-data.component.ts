import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrl: './update-data.component.css'
})
export class UpdateDataComponent implements OnInit {

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

  ngOnInit(): void {

    this.addUserForm.patchValue(this.userServices.getEditUserData())
    console.log(this.userServices.getEditUserData())

  }

  onSubmit(){
    console.log(this.addUserForm.value)


    this.userServices.editUserDetail(this.addUserForm.value).subscribe((res)=>{
      console.log('====================================');
      console.log(res);
      console.log('====================================');
    })


  }
}
