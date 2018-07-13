import { Component, OnInit } from '@angular/core';
import { SettingDisplay } from '../setting-display-type';
import { FundSourceType, FundSourceTypeService } from '../../../../api-service/config/research/fund-source-type.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fund-source-type-setting',
  templateUrl: './fund-source-type-setting.component.html',
  styleUrls: ['./fund-source-type-setting.component.css']
})
export class FundSourceTypeSettingComponent implements OnInit {

  public dataType: string;
  public settingDisplay: SettingDisplay = SettingDisplay.researchFundOriginType;

  public fundSourceTypes: FundSourceType[]  = [];

  public addValue: string;

  constructor(private activatedRoute: ActivatedRoute, private fundSourceTypeService: FundSourceTypeService) { }

  ngOnInit() {
    this.getList()
  
  }

  getList(){
    this.fundSourceTypeService.getList().subscribe( list => {
      this.fundSourceTypes = list;
    })
  }

  saveType(name: String){
    this.fundSourceTypeService.saveFundSourceType({id: null, fundSourceType: name}).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
      alert("Error"+ error)
    })
  }

  updateType(id: String, name: String){
    this.fundSourceTypeService.updateFundSourceType({id: id, fundSourceType: name}).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
      alert("Error"+ error)
    })
  }

}
