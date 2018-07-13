import { Component, OnInit } from '@angular/core';
import { ComponentModule } from '../component/component.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pre-login',
  templateUrl: './pre-login.component.html',
  styleUrls: ['./pre-login.component.css']
})
export class PreLoginComponent implements OnInit {

  constructor(private router: Router) { }

  public subPage: string = "login";

  ngOnInit() {
  }

  goToRegister(){
    this.router.navigateByUrl('/login/registration');
  }

  goToRegisterPublic(){
    this.router.navigateByUrl('/login/registrationPublic');
  }

  goToLogin(){
    this.subPage = "login";
  }

  goToFirstPage(){
    this.subPage = "search";
  }

  goToResearcherDashboard() {
    this.router.navigateByUrl('/app/post-login/researcher');
  }

}
