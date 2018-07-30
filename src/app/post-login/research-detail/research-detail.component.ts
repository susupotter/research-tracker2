import { Component, OnInit, Input } from '@angular/core';
import { RadioValue } from '../../component/radio-field/radio-value';

@Component({
  selector: 'app-research-detail',
  templateUrl: './research-detail.component.html',
  styleUrls: ['./research-detail.component.css']
})
export class ResearchDetailComponent implements OnInit {

  @Input('isProposal') isProposal: boolean;

  public researchPlaceType: RadioValue[] = [{label: "ห้องปฏิบัติการ", value: "T"}, {label: "ภาคสนาม", value: "P"},{label: "สำนักงาน", value: "S"}]
  public YesOrNo: RadioValue[] = [{label: "ได้", value: "Y"}, {label: "ไม่ได้", value: "N"}]
  public researchStatusType: RadioValue[] = [{label: "โครงการวิจัยใหม่", value: "N"}, {label: "โครงการวิจัยต่อเนื่อง", value:"C"}]

  public researchType: RadioValue[] = [{label: "อาจารย์", value: "T"}, {label: "บุคคลากรกรมหาฯ", value: "P"},{label: "นักศึกษา", value: "S"}]

  constructor() { }

  ngOnInit() {
  }

}
