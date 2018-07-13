import { NgModule } from "@angular/core";
import { ResearchDetailComponent } from "./research-detail.component";
import { ComponentModule } from "../../component/component.module";
import { TagInputModule } from "ngx-chips";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
      ComponentModule,
      TagInputModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [ResearchDetailComponent],
    exports:[ResearchDetailComponent]
  })
  export class ResearchDetailModule { }