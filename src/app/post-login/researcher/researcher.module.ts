import { NgModule } from "@angular/core";
import { ResearcherRoutingModule } from "./researcher-routing.module";
import { ResearcherComponent } from "./researcher.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResearchProposalComponent } from './research-proposal/research-proposal.component';
import { ComponentModule } from "../../component/component.module";
import { CommonModule } from "@angular/common";
import { UpdateProgressComponent } from './update-progress/update-progress.component';
import { ResearchDetailModule } from "../research-detail/research-detail.module";
import { DownloadFilesComponent } from './download-files/download-files.component';
import { TagInputModule } from 'ngx-chips';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ResearchDocumentDownloadModule } from "../research-document-download/research-document-download.module";
import { ResearcherPortfolioComponent } from './researcher-portfolio/researcher-portfolio.component';
import { CreatePortfolioComponent } from './researcher-portfolio/create-portfolio/create-portfolio.component';
import { PortfolioDetailModule } from "../portfolio-detail/portfolio-detail.module";
import { ProfileComponent } from './profile/profile.component';
import { ResearcherProfileModule } from "../researcher-profile/researcher-profile.module";
import { APIServiceModule } from "../../api-service/api.service.module";
import { SubmitFinalComponent } from './update-progress/submit-final/submit-final.component';
import { SearchResearchModule } from "../search-research/search-research.module";

@NgModule({
    imports: [
      ResearcherRoutingModule,
      ComponentModule,
      CommonModule,
      ResearchDetailModule,
      TagInputModule,
      ReactiveFormsModule,
      FormsModule,
      ResearchDocumentDownloadModule,
      PortfolioDetailModule,
      ResearcherProfileModule,
      APIServiceModule,
      SearchResearchModule
    ],
    declarations: [ResearcherComponent, DashboardComponent, ResearchProposalComponent, UpdateProgressComponent, DownloadFilesComponent, ResearcherPortfolioComponent, CreatePortfolioComponent, ProfileComponent, SubmitFinalComponent]
  })
  export class ResearcherModule { }