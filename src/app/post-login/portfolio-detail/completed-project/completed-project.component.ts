import { Component, OnInit } from '@angular/core';
import { RadioValue } from '../../../component/radio-field/radio-value';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-completed-project',
  templateUrl: './completed-project.component.html',
  styleUrls: ['./completed-project.component.css']
})
export class CompletedProjectComponent implements OnInit {

  hasReward: boolean;
  wasImplemented: boolean;
  forms: FormGroup;

  citationValues: RadioValue[] = [{label: "มี", value: "Y"}, {label: "ไม่มี", value: "N"}];
  partOfThesisValues: RadioValue[] = [{label: "เป็น", value: "Y"}, {label: "ไม่เป็น", value: "N"}];
  hasRewardValues: RadioValue[] = [{label: "ได้", value: "Y"}, {label: "ไม่ได้", value: "N"}];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      hasReward:'',
      wasImplemented:'',
      implementedYear: '',
      implementation: '',
      effectOnEconomics: '',
      effectOnSociety: '',
      effectOnEnvironment: '',
      effectOnOthers: '', 
    })

  }

  onChangeHasReward(value){
    if(this.forms.controls['hasReward'].value === "Y"){
      this.hasReward = true;
    } else {
      this.hasReward = false;
    }
  }

  onChangeWasImplemented(value){
    if(this.forms.controls['wasImplemented'].value === "Y"){
      this.wasImplemented = true;
    } else {
      this.wasImplemented = false;
    }
  }

}
