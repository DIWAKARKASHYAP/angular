import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor( private  route:Router) {}

  logOut(){
    localStorage.removeItem("TOKEN_ICGMS")
    this.route.navigateByUrl("")
  }
}
