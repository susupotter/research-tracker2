import { Component, OnInit, Input } from '@angular/core';
import { ResearchStatusActionDisplay } from '../../../../../model/display/research-status-display';

@Component({
  selector: 'app-progress-manage',
  templateUrl: './progress-manage.component.html',
  styleUrls: ['./progress-manage.component.css']
})
export class ProgressManageComponent implements OnInit {

  @Input('researchStatus') researchStatus: string;

  constructor() { }

  ngOnInit() {
  }

}
