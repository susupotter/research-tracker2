import { Component, OnInit, Input } from '@angular/core';
import { RadioValue } from '../../../../../component/radio-field/radio-value';

@Component({
  selector: 'app-proposal-manage',
  templateUrl: './proposal-manage.component.html',
  styleUrls: ['./proposal-manage.component.css']
})
export class ProposalManageComponent implements OnInit {

  @Input('researchStatus') researchStatus: string;

  public researchScaleType: RadioValue[] = [{label: "งานวิจัยเต็มรูปแบบ", value: "F"}, {label: "บทความวิจัย", value: "J"}];
  public researchStatusList: RadioValue[] = [{label: "รออนุมัติ", value: "W"}, {label: "อนุมัติแล้ว รอทำสัญญา", value: "S"}, {label: "เริ่มดำเนินโครงการ", value: "A"}, {label: "ไม่อนุมัติ", value: "R"}];

  constructor() { }

  ngOnInit() {
  }

}
