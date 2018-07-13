import { NgModule } from "@angular/core";
import { ComponentModule } from "../../component/component.module";
import { PortfolioDetailComponent } from "./portfolio-detail.component";
import { CompletedProjectComponent } from './completed-project/completed-project.component';
import { ArticleOrJournalComponent } from './article-or-journal/article-or-journal.component';
import { ConferenceReportComponent } from './conference-report/conference-report.component';
import { TagInputModule } from "ngx-chips";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        ComponentModule,
        TagInputModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [PortfolioDetailComponent
        , CompletedProjectComponent,
        ArticleOrJournalComponent,
        ConferenceReportComponent],
    exports: [PortfolioDetailComponent, CompletedProjectComponent,
        ArticleOrJournalComponent,
        ConferenceReportComponent]
})
export class PortfolioDetailModule { }