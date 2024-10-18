import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  showError: boolean = false

  constructor(private  services: LoginService, private  route:Router) {

  }
  ngOnInit(): void { }


  onSubmit() {
    console.log(this.userForm.value)
    this. services.login(this.userForm.value).subscribe((res: any) => {
      console.log(res)
      if (res.role_id) {
        this. services.getToken(this.userForm.value, res.role_id).subscribe((res: any) => {

          if(res.access_token){
            localStorage.setItem("TOKEN_ICGMS", res.access_token)
            this.route.navigateByUrl("dashboard")

          }
          console.log('====================================');
          console.log(res);
          console.log('====================================');
        })

      }
    })

  }
}


