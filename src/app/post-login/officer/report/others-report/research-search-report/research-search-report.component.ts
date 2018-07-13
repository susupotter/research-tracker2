import { Component, OnInit } from '@angular/core';
import { SelectorValue } from '../../../../../component/selector-field/selector-field.component';

@Component({
  selector: 'app-research-search-report',
  templateUrl: './research-search-report.component.html',
  styleUrls: ['./research-search-report.component.css']
})
export class ResearchSearchReportComponent implements OnInit {

  public publishingFormats: SelectorValue[] = [{
    id:'0',
    value:'บทคัดย่อ'
  },{
    id:'1',
    value:'งานวิจัยฉบับเต็ม'
  },{
    id:'2',
    value:'บทความวิจัย'
  },{
    id:'3',
    value:'รายงานการประชุม'
  },{
    id:'4',
    value:'อื่น ๆ'
  }];

  constructor() { }

  ngOnInit() {
  }

}
