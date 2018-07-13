import { Component, OnInit } from '@angular/core';
import { SettingDisplay } from '../../manage-researcher-setting/setting-display-type';
import { FundYear, StrategyType, Strategy, StrategySettingService } from '../../../../api-service/config/research/strategy-setting-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-strategy-setting',
  templateUrl: './strategy-setting.component.html',
  styleUrls: ['./strategy-setting.component.css']
})
export class StrategySettingComponent implements OnInit {

  public dataType: string;
  public settingDisplay: SettingDisplay = SettingDisplay.strategy;

  public fundYears: FundYear[] = [];
  public stragtegyTypes: StrategyType[] = [];
  public stragtegies: Strategy[] = [];

  public fundYearId: string;
  public strategyTypeId: string;

  public addValue: string;

  constructor(private activatedRoute: ActivatedRoute, private strategySettingService: StrategySettingService) { }

  ngOnInit() {
    this.settingDisplay = SettingDisplay.strategy;
    //this.getList()
    this.getFundYearList();

  }

  getFundYearList(){
    this.strategySettingService.getFundYearList().subscribe(list => {
      this.fundYears = list;
    })
  }

  onChangeFundYear(value){
    this.getStrategyTypeByFundYearId(value);
  }

  onChangeStrategyType(value){
    this.getList(value);
  }

  getStrategyTypeByFundYearId(fundYearId: string) {
    this.strategySettingService.getStrategyTypeListByFundYearId(fundYearId).subscribe(list => {
      this.stragtegyTypes = list;
    })
  }

  getList(strategyTypeId: string) {
    this.strategySettingService.getStrategyListByStrategyTypeId(strategyTypeId).subscribe(list => {
      this.stragtegies = list;
    })
  }

  saveType(strategy: String) {
    if(this.strategyTypeId && this.fundYearId){
      this.strategySettingService.saveStrategy({ id: null, strategy: strategy, strategyTypeId: this.strategyTypeId }).subscribe(response => {
        alert("Success")
        this.getList(this.strategyTypeId)
        //this.getListByFundYearId(this.fundYearId);
      }, error => {
        console.log(error);
        alert("Error" + error)
      })
    } else {
      alert("กรุณาเลือกปีงบประมาณและประเภทยุทธศาสตร์");
    }
    
  }

  updateType(id: String, strategy: String) {
    this.strategySettingService.updateStrategy({ id: id, strategy: strategy, strategyTypeId: this.strategyTypeId  }).subscribe(response => {
      alert("Success")
      this.getList(this.strategyTypeId)
      //this.getListByFundYearId(this.fundYearId);
    }, error => {
      console.log(error);
      alert("Error" + error)
    })
  }

}
