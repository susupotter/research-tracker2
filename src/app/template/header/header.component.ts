import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isOfficer: boolean;
  displayName: String = "รองศาสตราจารย์ ดร. xxxx yyyyyyy";

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url.indexOf('officer') > 0 || this.router.url.indexOf('admin') > 0) {
      this.isOfficer = true;
      this.displayName = "เจ้าหน้าที่สถาบันวิจัยและพัฒนา"
    }
  }

}
