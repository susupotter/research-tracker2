import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-researcher-profile',
  templateUrl: './researcher-profile.component.html',
  styleUrls: ['./researcher-profile.component.css']
})
export class ResearcherProfileComponent implements OnInit {

  currentTab: String;

  constructor() { }

  ngOnInit() {
    this.currentTab = 'general'
  }

  onChangeTab(tabName: string) {
    this.currentTab = tabName;
  }



}
