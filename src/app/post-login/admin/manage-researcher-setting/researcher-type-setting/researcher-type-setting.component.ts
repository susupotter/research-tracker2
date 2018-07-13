import { Component, OnInit } from '@angular/core';
import { SettingDisplay } from '../setting-display-type';
import { ResearcherType, ResearcherTypeService } from '../../../../api-service/config/user/researcher-type.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-researcher-type-setting',
  templateUrl: './researcher-type-setting.component.html',
  styleUrls: ['./researcher-type-setting.component.css']
})
export class ResearcherTypeSettingComponent implements OnInit {

  public dataType: string;
  public settingDisplay: SettingDisplay = SettingDisplay.researcherType;

  public researcherTypes: ResearcherType[]  = [];

  public addValue: string;

  constructor(private activatedRoute: ActivatedRoute, private researcherTypeService: ResearcherTypeService) { }

  ngOnInit() {
    this.getList()

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
