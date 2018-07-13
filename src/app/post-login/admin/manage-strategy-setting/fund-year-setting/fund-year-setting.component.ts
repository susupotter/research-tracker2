import { Component, OnInit } from '@angular/core';
import { SettingDisplay } from '../../manage-researcher-setting/setting-display-type';
import { FundYear, StrategySettingService } from '../../../../api-service/config/research/strategy-setting-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fund-year-setting',
  templateUrl: './fund-year-setting.component.html',
  styleUrls: ['./fund-year-setting.component.css']
})
export class FundYearSettingComponent implements OnInit {

  public dataType: string;
  public settingDisplay: SettingDisplay = SettingDisplay.fundYear;

  public fundYears: FundYear[] = [];

  public addValue: string;

  constructor(private activatedRoute: ActivatedRoute, private strategySettingService: StrategySettingService) { }

  ngOnInit() {
    this.settingDisplay = SettingDisplay.fundYear;

    this.getList()

  }

  getList() {
    this.strategySettingService.getFundYearList().subscribe(list => {
      this.fundYears = list;
    })
  }

  saveType(year: String) {
    this.strategySettingService.saveFundYear({ id: null, year: year }).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
      alert("Error" + error)
    })
  }

  updateType(year: String) {
    this.strategySettingService.updateFundYear({ id: null, year: year }).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
      alert("Error" + error)
    })
  }

}
