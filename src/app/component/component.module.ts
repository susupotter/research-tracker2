import { NgModule } from "@angular/core";
import { TextFieldComponent } from './text-field/text-field.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { RadioFieldComponent } from './radio-field/radio-field.component';
import { CommonModule } from '@angular/common';
import { DatePickerFieldComponent } from './date-picker-field/date-picker-field.component';
import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule,MatInputModule } from '@angular/material';
import { SelectorFieldComponent } from './selector-field/selector-field.component';
import { TextAreaFieldComponent } from './text-area-field/text-area-field.component';
import { UploadFieldComponent } from './upload-field/upload-field.component';
import { FormsModule } from "@angular/forms";


@NgModule({
    imports: [CommonModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule,MatInputModule,FormsModule],
    declarations: [TextFieldComponent, SearchFieldComponent, RadioFieldComponent, DatePickerFieldComponent, SelectorFieldComponent, TextAreaFieldComponent, UploadFieldComponent],
    exports: [TextFieldComponent, SearchFieldComponent, RadioFieldComponent, DatePickerFieldComponent,SelectorFieldComponent,TextAreaFieldComponent,UploadFieldComponent]
})
export class ComponentModule { }