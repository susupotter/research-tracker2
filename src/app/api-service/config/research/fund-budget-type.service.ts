import { Injectable } from '@angular/core';
import { BaseApiService } from '../../base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FundBudgetTypeService extends BaseApiService {

    constructor(private http: HttpClient) {
        super(http)
    }

    getList() {
        return this.http.get<FundBudgetType[]>(this.host + "/api/config/fundBudgetTypes");
    }

    saveFundBudgetType(fundBudgetType: FundBudgetType) {
        return this.http.post<String>(this.host + "/api/config/fundBudgetType", fundBudgetType);
    }

    updateFundBudgetType(fundBudgetType: FundBudgetType) {
        return this.http.put<String>(this.host + "/api/config/fundBudgetType", fundBudgetType);
    }

}
//TEST
export interface FundBudgetType {
    id: String;
    fundBudgetType: String;

    /*constructor(id: String, configType: String) {
        this.id = id;
        this.researcherType = configType;
    }*/
}