import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-selector-field',
  templateUrl: './selector-field.component.html',
  styleUrls: ['./selector-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectorFieldComponent),
      multi: true
    }
  ]
})
export class SelectorFieldComponent implements OnInit, ControlValueAccessor {

  @Input() label;
  @Input() formId;
  @Input() placeholder;
  @Input() horizontal: boolean;

  @Input() valueList: SelectorValue[];

  private disabled: boolean;
  private onChange = (_: any) => { };
  private onTouch = (_: any)  => { };

  private innerValue: String;

  constructor() { }

  ngOnInit() {
  }

  writeValue(id: any): void {
    this.innerValue = id;
    this.change(this.innerValue)
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  private getValueFromId(id: any) {
    if (this.valueList) {
      for (var i = 0; i < this.valueList.length; i++) {
        if(this.valueList[i].id === id ) return this.valueList[i].value;
      }
    }
    return null;
  }

  change(value: String){
    if(value){
      this.innerValue = value;
      this.onChange(this.innerValue)
    }
  }

}

export interface SelectorValue {
  id: String;
  value: String;
}
