import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioValue } from './radio-value';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-radio-field',
  templateUrl: './radio-field.component.html',
  styleUrls: ['./radio-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioFieldComponent),
      multi: true,
    }]
})
export class RadioFieldComponent implements OnInit, ControlValueAccessor {

  @Input() label;
  @Input() formId;
  @Input() placeholder;
  @Input() valueList: RadioValue[];
  @Input() name: string = "name";
  public value;

  private onChange = (_: any) => {};;

  private disabled: boolean;

  constructor() { 
  }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.change(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  change( value ) {
    this.onChange(value);
  }

}
