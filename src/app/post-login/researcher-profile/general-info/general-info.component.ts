import { Component, OnInit } from '@angular/core';
import { RadioValue } from '../../../component/radio-field/radio-value';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {

  public forms: FormGroup;
  public genderList: RadioValue[] = [{ label: "ชาย", value: "M" }, { label: "หญิง", value: "F" }];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forms = this.formBuilder.group({
      nameSurnameTH: new FormControl(''),
      nameSurnameEN: new FormControl(''),
      uniqueId: new FormControl(''),
      gender: new FormControl(''),
      address: new FormControl(''),
      birthDate: new FormControl(''),
      education: new FormControl(''),
      userType: new FormControl(''),
      sector: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      email: new FormControl(''),
    })
  }

}
