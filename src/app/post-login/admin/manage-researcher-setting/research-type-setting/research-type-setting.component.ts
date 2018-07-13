import { Component, OnInit } from '@angular/core';
import { SettingDisplay } from '../setting-display-type';
import { ResearchType, ResearchTypeService } from '../../../../api-service/config/research/research-type.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-research-type-setting',
  templateUrl: './research-type-setting.component.html',
  styleUrls: ['./research-type-setting.component.css']
})
export class ResearchTypeSettingComponent implements OnInit {

  public dataType: string;
  public settingDisplay: SettingDisplay = SettingDisplay.researchType;

  public researchTypes: ResearchType[]  = [];

  public addValue: string;

  constructor(private activatedRoute: ActivatedRoute, private researchTypeService: ResearchTypeService) { }

  ngOnInit() {
    this.getList()
  
  }

  getList(){
    this.researchTypeService.getList().subscribe( list => {
      this.researchTypes = list;
    })
  }

  saveType(name: String){
    this.researchTypeService.saveResearcherType({id: null, researchType: name}).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
      alert("Error"+ error)
    })
  }

  updateType(id: String, name: String){
    this.researchTypeService.updateResearcherType({id: id, researchType: name}).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
      alert("Error"+ error)
    })
  }

}
