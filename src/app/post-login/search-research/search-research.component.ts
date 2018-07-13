import { Component, OnInit } from '@angular/core';
import { SelectorValue } from '../../component/selector-field/selector-field.component';

@Component({
  selector: 'app-search-research',
  templateUrl: './search-research.component.html',
  styleUrls: ['./search-research.component.css']
})
export class SearchResearchComponent implements OnInit {

  valueList: SelectorValue[] = [
    {id:"name", value:"ชื่องานวิจัย"},
    {id:"tags", value:"คำสำคัญ"},
    {id:"owner", value:"ชื่อผู้ทำวิจัย"},
    {id:"type", value:"ประเภทงานวิจัย"},
    {id:"subject", value:"สาขาวิชาที่เกี่ยวข้อง"},
  ];

  isSearchClick: boolean;
  constructor() { }

  ngOnInit() {
  }

}
