import { Component, OnInit } from '@angular/core';
import { SettingDisplay } from '../setting-display-type';
import { FundType, FundTypeService } from '../../../../api-service/config/research/fund-type.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fund-type-setting',
  templateUrl: './fund-type-setting.component.html',
  styleUrls: ['./fund-type-setting.component.css']
})
export class FundTypeSettingComponent implements OnInit {

  public dataType: string;
  public settingDisplay: SettingDisplay = SettingDisplay.researchFundType;

  public fundTypes: FundType[]  = [];

  public addValue: string;

  constructor(private activatedRoute: ActivatedRoute, private fundTypeService: FundTypeService) { }

  ngOnInit() {
    this.getList()
  
  }

  getList(){
    this.fundTypeService.getList().subscribe( list => {
      this.fundTypes = list;
    })
  }

  saveType(name: String){
    this.fundTypeService.saveFundType({id: null, fundType: name}).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
      alert("Error"+ error)
    })
  }

  updateType(id: String, name: String){
    this.fundTypeService.updateFundType({id: id, fundType: name}).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
      alert("Error"+ error)
    })
  }

}
