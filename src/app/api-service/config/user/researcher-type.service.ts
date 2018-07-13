import { Injectable } from '@angular/core';
import { BaseApiService } from '../../base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ResearcherTypeService extends BaseApiService {

    //host: String = "http://localhost:8080";

    constructor(private http: HttpClient) {
        super(http)
    }

    getList() {
        return this.http.get<ResearcherType[]>(this.host + "/api/config/researcherTypes");
    }

    saveResearcherType(researcherType: ResearcherType) {
        return this.http.post<String>(this.host + "/api/config/researcherType", researcherType);
    }

    updateResearcherType(researcherType: ResearcherType) {
        return this.http.put<String>(this.host + "/api/config/researcherType", researcherType);
    }

}

export interface ResearcherType {
    id: String;
    researcherType: String;

    /*constructor(id: String, configType: String) {
        this.id = id;
        this.researcherType = configType;
    }*/
}