import { Component, OnInit } from '@angular/core';
import { RadioValue } from '../../component/radio-field/radio-value';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration-public',
  templateUrl: './registration-public.component.html',
  styleUrls: ['./registration-public.component.css']
})
export class RegistrationPublicComponent implements OnInit {

  public genderList: RadioValue[] = [{label:"ชาย", value:"M"},{label:"หญิง", value:"F"}];
  public educationList: RadioValue[] = [{label:"ปริญญาตรี", value:"B"},{label:"ปริญญาโท", value:"M"},{label:"ปริญญาเอก", value:"D"}];

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      
    })

  }

}
