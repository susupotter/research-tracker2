import { Component, OnInit } from '@angular/core';
import { FundYear, Strategy } from '../../../../api-service/config/research/strategy-setting-service';
import { SettingDisplay } from '../../manage-researcher-setting/setting-display-type';

@Component({
  selector: 'app-issue-setting',
  templateUrl: './issue-setting.component.html',
  styleUrls: ['./issue-setting.component.css']
})
export class IssueSettingComponent implements OnInit {

  public dataType: string;
  public settingDisplay: SettingDisplay = SettingDisplay.issue;

  public fundYears: FundYear[] = [];
  public stragtegies: Strategy[] = [];
  //public organizations: Organization[] = [];

  public fundYearId: string;
  public strategyId: string;

  public addValue: string;

  constructor() { }

  ngOnInit() {
  }

}
