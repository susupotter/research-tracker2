import { Component, OnInit } from '@angular/core';
import { RadioValue } from '../../../component/radio-field/radio-value';

@Component({
  selector: 'app-article-or-journal',
  templateUrl: './article-or-journal.component.html',
  styleUrls: ['./article-or-journal.component.css']
})
export class ArticleOrJournalComponent implements OnInit {

  citationValues: RadioValue[] = [{label: "มี", value: "Y"}, {label: "ไม่มี", value: "N"}];
  partOfThesisValues: RadioValue[] = [{label: "เป็น", value: "Y"}, {label: "ไม่เป็น", value: "N"}];
  hasRewardValues: RadioValue[] = [{label: "ได้", value: "Y"}, {label: "ไม่ได้", value: "N"}];
  constructor() { }

  ngOnInit() {
  }

}
