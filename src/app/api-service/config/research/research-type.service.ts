import { Injectable } from '@angular/core';
import { BaseApiService } from '../../base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ResearchTypeService extends BaseApiService {

    constructor(private http: HttpClient) {
        super(http)
    }

    getList() {
        return this.http.get<ResearchType[]>(this.host + "/api/config/researchTypes");
    }

    saveResearcherType(researchType: ResearchType) {
        return this.http.post<String>(this.host + "/api/config/researchType", researchType);
    }

    updateResearcherType(researchType: ResearchType) {
        return this.http.put<String>(this.host + "/api/config/researchType", researchType);
    }

}

export interface ResearchType {
    id: String;
    researchType: String;

    /*constructor(id: String, configType: String) {
        this.id = id;
        this.researcherType = configType;
    }*/
}