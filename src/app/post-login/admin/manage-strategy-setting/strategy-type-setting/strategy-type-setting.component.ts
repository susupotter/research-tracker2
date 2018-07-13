import { Component, OnInit } from '@angular/core';
import { SettingDisplay } from '../../manage-researcher-setting/setting-display-type';
import { ActivatedRoute } from '@angular/router';
import { StrategyType, StrategySettingService, FundYear } from '../../../../api-service/config/research/strategy-setting-service';

@Component({
  selector: 'app-strategy-type-setting',
  templateUrl: './strategy-type-setting.component.html',
  styleUrls: ['./strategy-type-setting.component.css']
})
export class StrategyTypeSettingComponent implements OnInit {

  public dataType: string;
  public settingDisplay: SettingDisplay = SettingDisplay.strategyType;

  public fundYears: FundYear[] = [];
  public stragtegyTypes: StrategyType[] = [];

  public fundYearId: string;

  public addValue: string;

  constructor(private activatedRoute: ActivatedRoute, private strategySettingService: StrategySettingService) { }

  ngOnInit() {
    this.settingDisplay = SettingDisplay.strategyType;

    //this.getList()
    this.getFundYearList();
    

  }

  getFundYearList(){
    this.strategySettingService.getFundYearList().subscribe(list => {
      this.fundYears = list;
    })
  }

  onChangeFundYear(value){
    this.getListByFundYearId(value);
  }

  getList() {
    this.strategySettingService.getStrategyTypeList().subscribe(list => {
      this.stragtegyTypes = list;
    })
  }

  getListByFundYearId(fundYearId: string) {
    this.strategySettingService.getStrategyTypeListByFundYearId(fundYearId).subscribe(list => {
      this.stragtegyTypes = list;
    })
  }

  saveType(strategyType: String) {
    if(this.fundYearId){
      this.strategySettingService.saveStrategyType({ id: null, strategyType: strategyType, fundYearId: this.fundYearId }).subscribe(response => {
        alert("Success")
        this.getListByFundYearId(this.fundYearId);
      }, error => {
        console.log(error);
        alert("Error" + error)
      })
    } else {
      alert("กรุณาเลือกปีงบประมาณ");
    }
    
  }

  updateType(id: String, strategyType: String) {
    this.strategySettingService.updateStrategyType({ id: id, strategyType: strategyType, fundYearId: this.fundYearId  }).subscribe(response => {
      alert("Success")
      this.getListByFundYearId(this.fundYearId);
    }, error => {
      console.log(error);
      alert("Error" + error)
    })
  }

}
