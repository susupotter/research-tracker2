import { NgModule } from "@angular/core";
import { ComponentModule } from "../../component/component.module";
import { ResearchDocumentDownloadComponent } from "./research-document-download.component"
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [
      ComponentModule,
      NgbModule,
      CommonModule
    ],
    declarations: [ResearchDocumentDownloadComponent],
    exports:[ResearchDocumentDownloadComponent]
  })
  export class ResearchDocumentDownloadModule { }