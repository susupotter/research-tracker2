import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  @Input() formId;
  @Input() placeholder;

  private disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

  writeValue(obj: any): void {

  }
  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

}
