import { Injectable } from '@angular/core';
import { BaseApiService } from '../../base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FundSourceTypeService extends BaseApiService {

    constructor(private http: HttpClient) {
        super(http)
    }

    getList() {
        return this.http.get<FundSourceType[]>(this.host + "/api/config/fundSourceTypes");
    }

    saveFundSourceType(fundSourceType: FundSourceType) {
        return this.http.post<String>(this.host + "/api/config/fundSourceType", fundSourceType);
    }

    updateFundSourceType(fundSourceType: FundSourceType) {
        return this.http.put<String>(this.host + "/api/config/fundSourceType", fundSourceType);
    }

}

export interface FundSourceType {
    id: String;
    fundSourceType: String;

    /*constructor(id: String, configType: String) {
        this.id = id;
        this.researcherType = configType;
    }*/
}