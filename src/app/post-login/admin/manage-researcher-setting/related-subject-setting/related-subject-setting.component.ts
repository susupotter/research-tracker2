import { Component, OnInit } from '@angular/core';
import { SettingDisplay } from '../setting-display-type';
import { RelatedSubject, RelatedSubjectService } from '../../../../api-service/config/research/related-subject.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-related-subject-setting',
  templateUrl: './related-subject-setting.component.html',
  styleUrls: ['./related-subject-setting.component.css']
})
export class RelatedSubjectSettingComponent implements OnInit {

  public dataType: string;
  public settingDisplay: SettingDisplay = SettingDisplay.relatedSubject;

  public relatedSubjects: RelatedSubject[]  = [];

  public addValue: string;

  constructor(private activatedRoute: ActivatedRoute, private relatedSubjectService: RelatedSubjectService) { }

  ngOnInit() {
    this.getList()
  
  }

  getList(){
    this.relatedSubjectService.getList().subscribe( list => {
      this.relatedSubjects = list;
    })
  }

  saveType(name: String){
    this.relatedSubjectService.saveRelatedSubject({id: null, relatedSubject: name}).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
      alert("Error"+ error)
    })
  }

  updateType(id: String, name: String){
    this.relatedSubjectService.updateRelatedSubject({id: id, relatedSubject: name}).subscribe(response => {
      window.location.reload();
    }, error => {
      console.log(error);
      alert("Error"+ error)
    })
  }

}
