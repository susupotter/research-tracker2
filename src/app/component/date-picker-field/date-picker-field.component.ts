import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {defaultFormat as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;


export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'DD/MM/YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'DD/MM/YYYY',
  },
};

@Component({
  selector: 'app-date-picker-field',
  templateUrl: './date-picker-field.component.html',
  styleUrls: ['./date-picker-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerFieldComponent),
      multi: true,
    }
    , { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }
    , { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }]
})
export class DatePickerFieldComponent implements OnInit, ControlValueAccessor {

  @Input() label;
  @Input() formId;
  @Input() placeholder;

  @Input() horizontal: boolean;

  @Input() formControl: FormControl;

  private disabled: boolean;

  public value;

  private onChange = (_: any) => { };;

  constructor() {
  }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    console.log(obj)
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

  change(value: _moment.Moment) {
    console.log(value)
    if(value){
      var dateStr = value.format("DD/MM/YYYY");
      this.onChange(dateStr);
    }
    /*if (value && value instanceof Date) {
      //this.value = this.parseDate(value);
      var dateStr = formatDate(value, "dd/MM/yyyy", "en-US");
      this.onChange(dateStr);
    } else if (value) {
      this.value = this.parseDate(value);
      this.onChange(value);
    }*/

  }

  parseDate(dateStr: string) {
    try {
      return Date.parse(dateStr);
    } catch (e) {
      return null;
    }
  }

}


