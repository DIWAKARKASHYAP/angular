import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'icgms';

  constructor(private router: Router){}

  ngOnInit(): void {
   let token = localStorage.getItem("TOKEN_ICGMS")

   if(token){
    // this.router.navigateByUrl('dashboard')
   }
  }
}
