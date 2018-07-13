import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {


  public role: string;
  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url.indexOf('post-login/researcher') > 0) {
      this.role = 'R';
    } else if (this.router.url.indexOf('officer') > 0) {
      this.role = 'O';
    } else {
      this.role = 'A';
    }
  }

  goTo(link){
    this.router.navigateByUrl(link)
  }

}
