import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";
import { BaseApiService } from "./base-api.service";
import { ResearcherTypeService } from "./config/user/researcher-type.service";
import { SectorTypeService } from "./config/user/sector-type.service";
import { ResearchTypeService } from "./config/research/research-type.service";
import { FundTypeService } from "./config/research/fund-type.service";
import { FundSourceTypeService } from "./config/research/fund-source-type.service";
import { RelatedSubjectService } from "./config/research/related-subject.service";
import { UserRegisterService } from "./config/user/user-register.service";
import { StrategySettingService } from "./config/research/strategy-setting-service";
import { UserDataService } from "./config/user/user-data.service";
import { FundBudgetTypeService } from "./config/research/fund-budget-type.service";
import { EducationService } from "./user/data/education.service";
import { CareerService } from "./user/data/career.service";
import { TrainingService } from "./user/data/training.service";
import { ImplementedWorkService } from "./user/data/implemented-work.service";
import { PatentService } from "./user/data/patent.service";
import { UploadFileService } from "./upload-file.service";

@NgModule({
    imports: [CommonModule, HttpClientModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'My-Xsrf-Cookie',
            headerName: 'My-Xsrf-Header',
        })],
    declarations: [],
    exports: [],
    providers: [BaseApiService
        , ResearcherTypeService, SectorTypeService
        , ResearchTypeService, FundTypeService,
        FundSourceTypeService, RelatedSubjectService,
        UserRegisterService, StrategySettingService,
        UserDataService, FundBudgetTypeService,
        EducationService, CareerService, TrainingService,
        ImplementedWorkService, PatentService, UploadFileService
        ]
})
export class APIServiceModule { }