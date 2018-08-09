import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ManageResearcherSettingComponent } from "./manage-researcher-setting/manage-researcher-setting.component";
import { ResearcherTypeSettingComponent } from "./manage-researcher-setting/researcher-type-setting/researcher-type-setting.component";
import { SectorTypeSettingComponent } from "./manage-researcher-setting/sector-type-setting/sector-type-setting.component";
import { ResearchTypeSettingComponent } from "./manage-researcher-setting/research-type-setting/research-type-setting.component";
import { FundTypeSettingComponent } from "./manage-researcher-setting/fund-type-setting/fund-type-setting.component";
import { FundSourceTypeSettingComponent } from "./manage-researcher-setting/fund-source-type-setting/fund-source-type-setting.component";
import { RelatedSubjectSettingComponent } from "./manage-researcher-setting/related-subject-setting/related-subject-setting.component";
import { FundYearSettingComponent } from "./manage-strategy-setting/fund-year-setting/fund-year-setting.component";
import { StrategyTypeSettingComponent } from "./manage-strategy-setting/strategy-type-setting/strategy-type-setting.component";
import { StrategySettingComponent } from "./manage-strategy-setting/strategy-setting/strategy-setting.component";
import { ListUserComponent } from "./manage-user/list-user/list-user.component";
import { ObjectiveSettingComponent } from "./manage-strategy-setting/objective-setting/objective-setting.component";
import { RoleSettingComponent } from "./manage-user/role-setting/role-setting.component";
import { FundBudgetTypeComponent } from "./manage-researcher-setting/fund-budget-type/fund-budget-type.component";
import { OrganizationSettingComponent } from "./manage-strategy-setting/organization-setting/organization-setting.component";
import { PlanSettingComponent } from "./manage-strategy-setting/plan-setting/plan-setting.component";
import { IssueSettingComponent} from "./manage-strategy-setting/issue-setting/issue-setting.component";
import { ManageAdminUserComponent } from "./manage-user/manage-admin-user/manage-admin-user.component";

const routes: Routes = [
    { path: '', component: AdminComponent, children: [
        { path: '', component: AdminComponent, pathMatch: 'full' },
        //{ path: 'post-login/admin', loadChildren: '../post-login/admin/admin.module#AdminModule' },
        //{ path: 'post-login/officer', loadChildren: '../post-login/officer/officer.module#OfficerModule' },
        //{ path: 'post-login/researcher', loadChildren: '../post-login/researcher/researcher.module#ResearcherModule' },
      ]},
      {path:'user/listUser', component:ListUserComponent},
      {path:'user/listAdminUser', component:ManageAdminUserComponent},
      {path:'user/roleSetting', component:RoleSettingComponent},
      {path:'setting', component:ManageResearcherSettingComponent},
      {path:'setting/researcherType', component:ResearcherTypeSettingComponent},
      {path:'setting/sectorType', component:SectorTypeSettingComponent},
      {path:'setting/researchType', component:ResearchTypeSettingComponent},
      {path:'setting/researchFundType', component:FundTypeSettingComponent},
      {path:'setting/researchFundSourceType', component:FundSourceTypeSettingComponent},
      {path:'setting/researchFundBudgetType', component:FundBudgetTypeComponent},
      {path:'setting/relatedSubject', component:RelatedSubjectSettingComponent},
      {path:'setting/fundYear', component:FundYearSettingComponent},
      {path:'setting/strategyType', component:StrategyTypeSettingComponent},
      {path:'setting/strategy', component:StrategySettingComponent},
      {path:'setting/organization', component:OrganizationSettingComponent},
      {path:'setting/plan', component:PlanSettingComponent},
      {path:'setting/objective', component:ObjectiveSettingComponent},
      {path:'setting/issue', component:IssueSettingComponent},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
  
  })
  export class AdminRoutingModule { }