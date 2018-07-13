import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageStrategySettingComponent } from './manage-strategy-setting/manage-strategy-setting.component';
import { ManageResearcherSettingComponent } from './manage-researcher-setting/manage-researcher-setting.component';
import { APIServiceModule } from "../../api-service/api.service.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ResearcherTypeSettingComponent } from "./manage-researcher-setting/researcher-type-setting/researcher-type-setting.component";
import { SectorTypeSettingComponent } from './manage-researcher-setting/sector-type-setting/sector-type-setting.component';
import { ResearchTypeSettingComponent } from './manage-researcher-setting/research-type-setting/research-type-setting.component';
import { FundTypeSettingComponent } from './manage-researcher-setting/fund-type-setting/fund-type-setting.component';
import { FundSourceTypeSettingComponent } from './manage-researcher-setting/fund-source-type-setting/fund-source-type-setting.component';
import { RelatedSubjectSettingComponent } from './manage-researcher-setting/related-subject-setting/related-subject-setting.component';
import { FundYearSettingComponent } from './manage-strategy-setting/fund-year-setting/fund-year-setting.component';
import { StrategyTypeSettingComponent } from './manage-strategy-setting/strategy-type-setting/strategy-type-setting.component';
import { ComponentModule } from "../../component/component.module";
import { StrategySettingComponent } from './manage-strategy-setting/strategy-setting/strategy-setting.component';
import { ListUserComponent } from './manage-user/list-user/list-user.component';
import { PipeModule } from "../../pipe/pipe.module";
import { ObjectiveSettingComponent } from './manage-strategy-setting/objective-setting/objective-setting.component';
import { IssueSettingComponent } from './manage-strategy-setting/issue-setting/issue-setting.component';
import { RoleSettingComponent } from './manage-user/role-setting/role-setting.component';
import { FundBudgetTypeComponent } from './manage-researcher-setting/fund-budget-type/fund-budget-type.component';

@NgModule({
    imports: [
      CommonModule,
      AdminRoutingModule,
      APIServiceModule,
      FormsModule,
      ComponentModule,
      PipeModule
    ],
    declarations: [AdminComponent, ManageUserComponent, ManageStrategySettingComponent, ManageResearcherSettingComponent,ResearcherTypeSettingComponent, SectorTypeSettingComponent, ResearchTypeSettingComponent, FundTypeSettingComponent, FundSourceTypeSettingComponent, RelatedSubjectSettingComponent, FundYearSettingComponent, StrategyTypeSettingComponent, StrategySettingComponent, ListUserComponent, ObjectiveSettingComponent, IssueSettingComponent, RoleSettingComponent, FundBudgetTypeComponent]
  })
  export class AdminModule { }