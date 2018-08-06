import { Component, OnInit } from '@angular/core';
import { SettingDisplay } from '../../manage-researcher-setting/setting-display-type';
import { FundYear, Strategy } from '../../../../api-service/config/research/strategy-setting-service';

@Component({
  selector: 'app-organization-setting',
  templateUrl: './organization-setting.component.html',
  styleUrls: ['./organization-setting.component.css']
})
export class OrganizationSettingComponent implements OnInit {

  public dataType: string;
  public settingDisplay: SettingDisplay = SettingDisplay.organization;

  public fundYears: FundYear[] = [];
  public stragtegies: Strategy[] = [];

  public fundYearId: string;
  public strategyId: string;

  public addValue: string;

  constructor() { }

  ngOnInit() {
  }

}
