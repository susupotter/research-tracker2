import { Injectable } from '@angular/core';
import { BaseApiService } from '../../base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FundTypeService extends BaseApiService {

    constructor(private http: HttpClient) {
        super(http)
    }

    getList() {
        return this.http.get<FundType[]>(this.host + "/api/config/fundTypes");
    }

    saveFundType(fundType: FundType) {
        return this.http.post<String>(this.host + "/api/config/fundType", fundType);
    }

    updateFundType(fundType: FundType) {
        return this.http.put<String>(this.host + "/api/config/fundType", fundType);
    }

}

export interface FundType {
    id: String;
    fundType: String;

    /*constructor(id: String, configType: String) {
        this.id = id;
        this.researcherType = configType;
    }*/
}