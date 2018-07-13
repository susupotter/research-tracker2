import { Component, OnInit } from '@angular/core';
import { SettingDisplay } from '../../manage-researcher-setting/setting-display-type';
import { FundYear, StrategyType, Strategy, Objective, StrategySettingService } from '../../../../api-service/config/research/strategy-setting-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-objective-setting',
  templateUrl: './objective-setting.component.html',
  styleUrls: ['./objective-setting.component.css']
})
export class ObjectiveSettingComponent implements OnInit {

  public dataType: string;
  public settingDisplay: SettingDisplay = SettingDisplay.objective;

  public fundYears: FundYear[] = [];
  public stragtegyTypes: StrategyType[] = [];
  public stragtegies: Strategy[] = [];

  public objectives: Objective[] = [];

  public fundYearId: string;
  public strategyTypeId: string;
  public strategyId: string;

  public addValue: string;

  constructor(private activatedRoute: ActivatedRoute, private strategySettingService: StrategySettingService) { }

  ngOnInit() {
    this.settingDisplay = SettingDisplay.objective;
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
    this.getStrategyByStrategyTypeId(value);
  }

  onChangeStrategy(value){
    this.getList(value);
  }

  getStrategyTypeByFundYearId(fundYearId: string) {
    this.strategySettingService.getStrategyTypeListByFundYearId(fundYearId).subscribe(list => {
      this.stragtegyTypes = list;
    })
  }

  getStrategyByStrategyTypeId(strategyTypeId: string) {
    this.strategySettingService.getStrategyListByStrategyTypeId(strategyTypeId).subscribe(list => {
      this.stragtegies = list;
    })
  }

  getList(strategyId: string) {
    this.strategySettingService.getObjectiveListByStrategyId(strategyId).subscribe(list => {
      this.objectives = list;
    })
  }

  saveType(objective: String) {
    if(this.strategyTypeId && this.fundYearId){
      this.strategySettingService.saveObjective({ id: null, objective: objective, strategyId: this.strategyId }).subscribe(response => {
        alert("Success")
        this.getList(this.strategyId)
        //this.getListByFundYearId(this.fundYearId);
      }, error => {
        console.log(error);
        alert("Error" + error)
      })
    } else {
      alert("กรุณาเลือกปีงบประมาณ ประเภทยุทธศาสตร์ และยุทธศาสตร์");
    }
    
  }

  updateType(id: String, objective: String) {
    this.strategySettingService.updateObjective({ id: id, objective: objective, strategyId: this.strategyId  }).subscribe(response => {
      alert("Success")
      this.getList(this.strategyId)
      //this.getListByFundYearId(this.fundYearId);
    }, error => {
      console.log(error);
      alert("Error" + error)
    })
  }

}
