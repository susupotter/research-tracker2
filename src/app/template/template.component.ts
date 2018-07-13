import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  isOfficer: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url.indexOf('officer') > 0 || this.router.url.indexOf('admin') > 0) {
      this.isOfficer = true;
    }
  }

}
