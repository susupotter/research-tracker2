import { NgModule } from "@angular/core";
import { OfficerRoutingModule } from "./officer-routing.module";
import { OfficerComponent } from "./officer.component";
import { ReviewResearchProposalComponent } from './review-research-proposal/review-research-proposal.component';
import { ProposalDetailComponent } from './review-research-proposal/proposal-detail/proposal-detail.component';
import { ResearchDetailModule } from "../research-detail/research-detail.module";
import { ComponentModule } from "../../component/component.module";
import { ProposalManageComponent } from './review-research-proposal/proposal-detail/proposal-manage/proposal-manage.component';
import { CommonModule } from "@angular/common";
import { ReviewResearchProgressComponent } from './review-research-progress/review-research-progress.component';
import { ProgressDetailComponent } from './review-research-progress/progress-detail/progress-detail.component';
import { ProgressManageComponent } from './review-research-progress/progress-detail/progress-manage/progress-manage.component';
import { ResearchDocumentDownloadModule } from "../research-document-download/research-document-download.module";
import { ReportComponent } from './report/report.component';
import { ResearcherReportComponent } from './report/researcher-report/researcher-report.component';
import { ResearchProjectReportComponent } from './report/research-project-report/research-project-report.component';
import { ResearcherProfileReportComponent } from './report/researcher-report/researcher-profile-report/researcher-profile-report.component';
import { ResearcherProjectReportComponent } from './report/researcher-report/researcher-project-report/researcher-project-report.component';
import { ResearcherResearcherReportComponent } from './report/researcher-report/researcher-researcher-report/researcher-researcher-report.component';
import { ProjectReportComponent } from './report/project-report/project-report.component';
import { ProjectTypeReportComponent } from './report/project-report/project-type-report/project-type-report.component';
import { ProjectResearcherReportComponent } from './report/project-report/project-researcher-report/project-researcher-report.component';
import { ProjectApproveReportComponent } from './report/project-report/project-approve-report/project-approve-report.component';
import { ProgressReportComponent } from './report/progress-report/progress-report.component';
import { ProjectStatusReportComponent } from './report/progress-report/project-status-report/project-status-report.component';
import { ProjectStatusReseacherReportComponent } from './report/progress-report/project-status-reseacher-report/project-status-reseacher-report.component';
import { ProjectStudentReportComponent } from './report/progress-report/project-student-report/project-student-report.component';
import { FinalProjectReportComponent } from './report/final-project-report/final-project-report.component';
import { CompleteProjectReportComponent } from './report/final-project-report/complete-project-report/complete-project-report.component';
import { CompleteProjectResearcherReportComponent } from './report/final-project-report/complete-project-researcher-report/complete-project-researcher-report.component';
import { CompleteProjectPublishedFormatReportComponent } from './report/final-project-report/complete-project-published-format-report/complete-project-published-format-report.component';
import { OthersReportComponent } from './report/others-report/others-report.component';
import { PaymentReportComponent } from './report/others-report/payment-report/payment-report.component';
import { ResearchSearchReportComponent } from './report/others-report/research-search-report/research-search-report.component';
import { ResearchFundManageComponent } from './research-fund-manage/research-fund-manage.component';
import { ResearchFundDetailComponent } from './research-fund-manage/research-fund-detail/research-fund-detail.component';
import { SearchResearchModule } from "../search-research/search-research.module";

@NgModule({
    imports: [
      OfficerRoutingModule,
      ResearchDetailModule,
      ResearchDocumentDownloadModule,
      ComponentModule,
      CommonModule,
      SearchResearchModule
    ],
    declarations: [OfficerComponent, ReviewResearchProposalComponent, ProposalDetailComponent, ProposalManageComponent, ReviewResearchProgressComponent, ProgressDetailComponent, ProgressManageComponent, ReportComponent, ResearcherReportComponent, ResearchProjectReportComponent, ResearcherProfileReportComponent, ResearcherProjectReportComponent, ResearcherResearcherReportComponent, ProjectReportComponent, ProjectTypeReportComponent, ProjectResearcherReportComponent, ProjectApproveReportComponent, ProgressReportComponent, ProjectStatusReportComponent, ProjectStatusReseacherReportComponent, ProjectStudentReportComponent, FinalProjectReportComponent, CompleteProjectReportComponent, CompleteProjectResearcherReportComponent, CompleteProjectPublishedFormatReportComponent, OthersReportComponent, PaymentReportComponent, ResearchSearchReportComponent, ResearchFundManageComponent, ResearchFundDetailComponent]
  })
  export class OfficerModule { }