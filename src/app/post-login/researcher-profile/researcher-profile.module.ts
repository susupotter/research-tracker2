import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResearcherProfileComponent } from "./researcher-profile.component";
import { AwardsComponent } from "./awards/awards.component";
import { CareerComponent } from "./career/career.component";
import { EducationComponent } from "./education/education.component";
import { GeneralInfoComponent } from "./general-info/general-info.component";
import { ImplementedWorksComponent } from "./implemented-works/implemented-works.component";
import { ProficiencyComponent } from "./proficiency/proficiency.component";
import { PublishedWorksComponent } from "./published-works/published-works.component";
import { ResearchProjectComponent } from "./research-project/research-project.component";
import { TrainingComponent } from "./training/training.component";
import { PatentComponent } from "./patent/patent.component";
import { ComponentModule } from "../../component/component.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ResearcherProfileComponent,
    AwardsComponent,
    CareerComponent,
    EducationComponent,
    GeneralInfoComponent,
    ImplementedWorksComponent,
    ProficiencyComponent,
    PublishedWorksComponent,
    ResearchProjectComponent,
    TrainingComponent,
    PatentComponent,
  ]
  ,
  exports: [
    ResearcherProfileComponent]
})
export class ResearcherProfileModule { }