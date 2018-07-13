import { Component, OnInit } from '@angular/core';
import { SettingDisplay } from '../setting-display-type';
import { ActivatedRoute } from '@angular/router';
import { SectorType, SectorTypeService } from '../../../../api-service/config/user/sector-type.service';

@Component({
  selector: 'app-sector-type-setting',
  templateUrl: './sector-type-setting.component.html',
  styleUrls: ['./sector-type-setting.component.css']
})
export class SectorTypeSettingComponent implements OnInit {

  public dataType: string;
  public settingDisplay: SettingDisplay = SettingDisplay.sectorType;

  public sectorTypes: SectorType[]  = [];

  public addValue: string;

  constructor(private activatedRoute: ActivatedRoute, private sectorTypeService: SectorTypeService) { }

  ngOnInit() {
    this.settingDisplay = SettingDisplay.sectorType;

      this.getList()

  }

  getList(){
    this.sectorTypeService.getList().subscribe( list => {
      this.sectorTypes = list;
    })
  }

  saveType(name: String){
    this.sectorTypeService.saveResearcherType({id: null, sectorType: name}).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
      alert("Error"+ error)
    })
  }

  updateType(id: String, name: String){
    this.sectorTypeService.updateResearcherType({id: id, sectorType: name}).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
      alert("Error"+ error)
    })
  }

}
