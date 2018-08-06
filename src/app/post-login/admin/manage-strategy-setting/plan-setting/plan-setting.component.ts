import { Component, OnInit } from '@angular/core';
import { FundYear, Strategy } from '../../../../api-service/config/research/strategy-setting-service';
import { SettingDisplay } from '../../manage-researcher-setting/setting-display-type';

@Component({
  selector: 'app-plan-setting',
  templateUrl: './plan-setting.component.html',
  styleUrls: ['./plan-setting.component.css']
})
export class PlanSettingComponent implements OnInit {

  public dataType: string;
  public settingDisplay: SettingDisplay = SettingDisplay.plan;

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
