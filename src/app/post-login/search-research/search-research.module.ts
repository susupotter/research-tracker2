
import { NgModule } from '@angular/core';
import { SearchResearchComponent } from './search-research.component';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../../component/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ComponentModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        SearchResearchComponent,
    ]
    ,
    exports: [
        SearchResearchComponent]
})
export class SearchResearchModule { }