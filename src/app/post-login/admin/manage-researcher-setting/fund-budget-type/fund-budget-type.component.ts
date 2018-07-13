import { Component, OnInit } from '@angular/core';
import { SettingDisplay } from '../setting-display-type';
import { FundBudgetTypeService, FundBudgetType } from '../../../../api-service/config/research/fund-budget-type.service';

@Component({
  selector: 'app-fund-budget-type',
  templateUrl: './fund-budget-type.component.html',
  styleUrls: ['./fund-budget-type.component.css']
})
export class FundBudgetTypeComponent implements OnInit {

  public dataType: string;
  public settingDisplay: SettingDisplay = SettingDisplay.researchFundBudgetType;

  public fundTypes: FundBudgetType[]  = [];

  public addValue: string;

  constructor(private fundBudgetTypeService: FundBudgetTypeService) { }

  ngOnInit() {
    this.getList()
  
  }

  getList(){
    this.fundBudgetTypeService.getList().subscribe( list => {
      this.fundTypes = list;
    })
  }

  saveType(name: String){
    this.fundBudgetTypeService.saveFundBudgetType({id: null, fundBudgetType: name}).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
      alert("Error"+ error)
    })
  }

  updateType(id: String, name: String){
    this.fundBudgetTypeService.saveFundBudgetType({id: id, fundBudgetType: name}).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
      alert("Error"+ error)
    })
  }

}
