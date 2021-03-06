import { Injectable } from '@angular/core';
import { BaseApiService } from '../../base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SectorTypeService extends BaseApiService {

    constructor(private http: HttpClient) {
        super(http)
    }

    getList() {
        return this.http.get<SectorType[]>(this.host + "/api/config/sectorTypes");
    }

    saveResearcherType(sectorType: SectorType) {
        return this.http.post<String>(this.host + "/api/config/sectorType", sectorType);
    }

    updateResearcherType(sectorType: SectorType) {
        return this.http.put<String>(this.host + "/api/config/sectorType", sectorType);
    }

}

export interface SectorType {
    id: String;
    sectorType: String;
}