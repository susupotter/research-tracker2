import { Component, OnInit } from '@angular/core';
import { RadioValue } from '../../../../component/radio-field/radio-value';

@Component({
  selector: 'app-submit-final',
  templateUrl: './submit-final.component.html',
  styleUrls: ['./submit-final.component.css']
})
export class SubmitFinalComponent implements OnInit {

  citationValues: RadioValue[] = [{label: "มี", value: "Y"}, {label: "ไม่มี", value: "N"}];
  partOfThesisValues: RadioValue[] = [{label: "เป็น", value: "Y"}, {label: "ไม่เป็น", value: "N"}];
  hasRewardValues: RadioValue[] = [{label: "ได้", value: "Y"}, {label: "ไม่ได้", value: "N"}];

  constructor() { }

  ngOnInit() {
  }

}
