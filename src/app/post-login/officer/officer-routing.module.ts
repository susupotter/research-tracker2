import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OfficerComponent } from "./officer.component";
import { ReviewResearchProposalComponent } from "./review-research-proposal/review-research-proposal.component";
import { ProposalDetailComponent } from "./review-research-proposal/proposal-detail/proposal-detail.component";
import { ReviewResearchProgressComponent } from "./review-research-progress/review-research-progress.component";
import { ProgressDetailComponent } from "./review-research-progress/progress-detail/progress-detail.component";
import { ResearcherProfileReportComponent } from "./report/researcher-report/researcher-profile-report/researcher-profile-report.component";
import { ResearcherProjectReportComponent } from "./report/researcher-report/researcher-project-report/researcher-project-report.component";
import { ResearcherResearcherReportComponent } from "./report/researcher-report/researcher-researcher-report/researcher-researcher-report.component";
import { ProjectTypeReportComponent } from "./report/project-report/project-type-report/project-type-report.component";
import { ProjectResearcherReportComponent } from "./report/project-report/project-researcher-report/project-researcher-report.component";
import { ProjectApproveReportComponent } from "./report/project-report/project-approve-report/project-approve-report.component";
import { ProjectStatusReportComponent } from "./report/progress-report/project-status-report/project-status-report.component";
import { ProjectStudentReportComponent } from "./report/progress-report/project-student-report/project-student-report.component";
import { ProjectStatusReseacherReportComponent } from "./report/progress-report/project-status-reseacher-report/project-status-reseacher-report.component";
import { CompleteProjectReportComponent } from "./report/final-project-report/complete-project-report/complete-project-report.component";
import { CompleteProjectResearcherReportComponent } from "./report/final-project-report/complete-project-researcher-report/complete-project-researcher-report.component";
import { CompleteProjectPublishedFormatReportComponent } from "./report/final-project-report/complete-project-published-format-report/complete-project-published-format-report.component";
import { PaymentReportComponent } from "./report/others-report/payment-report/payment-report.component";
import { ResearchSearchReportComponent } from "./report/others-report/research-search-report/research-search-report.component";
import { ResearchFundManageComponent } from "./research-fund-manage/research-fund-manage.component";
import { ResearchFundDetailComponent } from "./research-fund-manage/research-fund-detail/research-fund-detail.component";
import { SearchResearchComponent } from "../search-research/search-research.component";

const routes: Routes = [
    { path: '', component: OfficerComponent, children: [
        { path: '', component: OfficerComponent, pathMatch: 'full' },
        //{ path: 'post-login/admin', loadChildren: '../post-login/admin/admin.module#AdminModule' },
        //{ path: 'post-login/officer', loadChildren: '../post-login/officer/officer.module#OfficerModule' },
        //{ path: 'post-login/researcher', loadChildren: '../post-login/researcher/researcher.module#ResearcherModule' },
      ]},
    { path:'search', component: SearchResearchComponent },
    {path:'researchProposal', component:ReviewResearchProposalComponent},
    {path:'researchProposal/detail', component:ProposalDetailComponent},
    {path:'researchProgress', component:ReviewResearchProgressComponent},
    {path:'researchProgress/detail', component:ProgressDetailComponent},
    {path:'researchProgress/detail/:status', component:ProgressDetailComponent, pathMatch: 'full'},
    {path:'report/researcher/profile', component:ResearcherProfileReportComponent},
    {path:'report/researcher/project', component:ResearcherProjectReportComponent},
    {path:'report/researcher/researcher', component:ResearcherResearcherReportComponent},
    {path:'report/project/type', component:ProjectTypeReportComponent},
    {path:'report/project/proposeResearcher', component:ProjectResearcherReportComponent},
    {path:'report/project/approved', component:ProjectApproveReportComponent},
    {path:'report/progress/status', component:ProjectStatusReportComponent},
    {path:'report/progress/researcher', component:ProjectStatusReseacherReportComponent},
    {path:'report/progress/student', component:ProjectStudentReportComponent},
    {path:'report/final/project', component:CompleteProjectReportComponent},
    {path:'report/final/researcher', component:CompleteProjectResearcherReportComponent},
    {path:'report/final/publishingFormat', component:CompleteProjectPublishedFormatReportComponent},
    {path:'report/others/payment', component:PaymentReportComponent},
    {path:'report/others/searchStat', component:ResearchSearchReportComponent},
    {path:'researchFundManage', component: ResearchFundManageComponent},
    {path:'researchFundManage/detail', component: ResearchFundDetailComponent},
    {path:'researchFundManage/detail/:fundId', component: ResearchFundDetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  
  })
  export class OfficerRoutingModule { }