import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SettingDisplay } from './setting-display-type';
import { APIServiceModule } from '../../../api-service/api.service.module';
import { ResearcherTypeService, ResearcherType } from '../../../api-service/config/user/researcher-type.service';

@Component({
  selector: 'app-manage-researcher-setting',
  templateUrl: './manage-researcher-setting.component.html',
  styleUrls: ['./manage-researcher-setting.component.css']
})
export class ManageResearcherSettingComponent implements OnInit {

  public dataType: string;
  public settingDisplay: SettingDisplay;

  public researcherTypes: ResearcherType[]  = [];

  public addValue: string;

  constructor(private activatedRoute: ActivatedRoute, private researcherTypeService: ResearcherTypeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.dataType = params['dataType']

      if (this.dataType == 'researcherType') {
        this.settingDisplay = SettingDisplay.researcherType;
      } else if (this.dataType == 'sectorType') {
        this.settingDisplay = SettingDisplay.sectorType;
      } else if (this.dataType == 'researchType') {
        this.settingDisplay = SettingDisplay.researchType;
      } else if (this.dataType == 'researchFundType') {
        this.settingDisplay = SettingDisplay.researchFundType;
      } else if (this.dataType == 'researchFundOriginType') {
        this.settingDisplay = SettingDisplay.researchFundOriginType;
      } else if (this.dataType == 'relatedSubject') {
        this.settingDisplay = SettingDisplay.relatedSubject;
      }

      this.getList()
    })

  }

  getList(){
    this.researcherTypeService.getList().subscribe( list => {
      this.researcherTypes = list;
    })
  }

  saveType(name: String){
    this.researcherTypeService.saveResearcherType({id: null, researcherType: name}).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
      alert("Error"+ error)
    })
  }

  updateType(id: String, name: String){
    this.researcherTypeService.updateResearcherType({id: id, researcherType: name}).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
      alert("Error"+ error)
    })
  }


}
