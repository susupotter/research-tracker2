import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-area-field',
  templateUrl: './text-area-field.component.html',
  styleUrls: ['./text-area-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaFieldComponent),
      multi: true
    }
  ]
})
export class TextAreaFieldComponent implements OnInit, ControlValueAccessor {

  @Input() label;
  @Input() formId;
  @Input() placeholder;

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
