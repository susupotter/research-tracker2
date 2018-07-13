import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormControlName, FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectorFieldComponent } from '../selector-field/selector-field.component';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true
    }
  ]
})
export class TextFieldComponent implements OnInit, ControlValueAccessor {

  @Input() label;
  @Input() formId;
  @Input() placeholder;

  @Input() horizontal: boolean;
  @Input() readonly: boolean;

  private disabled: boolean;

  public value;

  private onChange = (_: any) => {};;
  private onTouch = (_: any)  => { };

  constructor() { }

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
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  change( value ) {
    this.onChange(value);
  }

}
