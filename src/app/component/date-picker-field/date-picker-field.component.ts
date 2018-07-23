import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { defaultFormat as _rollupMoment } from 'moment';

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
    var momentValue: _moment.Moment;

    if (obj && typeof obj === 'string') {
      momentValue = _moment(obj, "DD/MM/YYYY");
    }
    this.value = momentValue;
    this.change(momentValue);

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
    if (value) {
      var dateStr = value.format("DD/MM/YYYY");
      this.onChange(dateStr);
    } else {
      this.onChange('');
    }

  }

  parseDate(dateStr: string) {
    try {
      return Date.parse(dateStr);
    } catch (e) {
      return null;
    }
  }

}


