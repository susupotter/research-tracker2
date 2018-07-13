import { Injectable } from '@angular/core';
import { BaseApiService } from '../../base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RelatedSubjectService extends BaseApiService {

    constructor(private http: HttpClient) {
        super(http)
    }

    getList() {
        return this.http.get<RelatedSubject[]>(this.host + "/api/config/relatedSubjects");
    }

    saveRelatedSubject(relatedSubject: RelatedSubject) {
        return this.http.post<String>(this.host + "/api/config/relatedSubject", relatedSubject);
    }

    updateRelatedSubject(relatedSubject: RelatedSubject) {
        return this.http.put<String>(this.host + "/api/config/relatedSubject", relatedSubject);
    }

}

export interface RelatedSubject {
    id: String;
    relatedSubject: String;

    /*constructor(id: String, configType: String) {
        this.id = id;
        this.researcherType = configType;
    }*/
}