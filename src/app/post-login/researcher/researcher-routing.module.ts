import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResearcherComponent } from "./researcher.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ResearchProposalComponent } from "./research-proposal/research-proposal.component";
import { UpdateProgressComponent } from "./update-progress/update-progress.component";
import { DownloadFilesComponent } from "./download-files/download-files.component";
import { ResearcherPortfolioComponent } from "./researcher-portfolio/researcher-portfolio.component";
import { CreatePortfolioComponent } from "./researcher-portfolio/create-portfolio/create-portfolio.component";
import { ProfileComponent } from "./profile/profile.component";
import { SubmitFinalComponent } from "./update-progress/submit-final/submit-final.component";
import { SearchResearchComponent } from "../search-research/search-research.component";
import { FundDetailComponent } from "./fund-detail/fund-detail.component";
import { FundDetailDetailComponent } from "./fund-detail/fund-detail-detail/fund-detail-detail.component";

const routes: Routes = [
    { path: '', component: DashboardComponent, children: [
        { path: '', component: DashboardComponent, pathMatch: 'full' },
      ]},
      { path: 'profile', component: ProfileComponent },
      { path: 'proposal', component: ResearchProposalComponent },
      { path: 'detail', component: UpdateProgressComponent },
      { path: 'detail/:status', component: UpdateProgressComponent },
      { path: 'submitFinal', component: SubmitFinalComponent },
      { path: 'download', component: DownloadFilesComponent },
      { path: 'portfolio', component: ResearcherPortfolioComponent },
      { path: 'portfolio/create/:portType', component: CreatePortfolioComponent },
      { path: 'search', component: SearchResearchComponent },
      { path: 'fundDetail', component: FundDetailComponent },
      { path: 'fundDetail/:fundId', component: FundDetailDetailComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  
  })
  export class ResearcherRoutingModule { }