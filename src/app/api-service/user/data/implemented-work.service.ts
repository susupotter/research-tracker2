import { Injectable } from "@angular/core";
import { BaseApiService } from "../../base-api.service";
import { HttpClient } from "@angular/common/http";



@Injectable()
export class ImplementedWorkService extends BaseApiService {

    constructor(private http: HttpClient) {
        super(http)
    }

    getList(uniqueId: String) {
        return this.http.get<ImplementedWork[]>(this.host + "/api/user/implementedWorks?uniqueId=" + uniqueId);
    }

    saveImplementedWork(uniqueId: String, implementedWork: ImplementedWork) {
        return this.http.post<String>(this.host + "/api/user/implementedWork?uniqueId=" + uniqueId, implementedWork);
    }

    updateImplementedWork(uniqueId: String, implementedWork: ImplementedWork) {
        return this.http.put<String>(this.host + "/api/user/implementedWork?uniqueId=" + uniqueId, implementedWork);
    }

    getImplementedWork(uniqueId: String, id: String) {
        return this.http.get<ImplementedWork>(this.host + "/api/user/implementedWork?uniqueId=" + uniqueId + "&id=" + id);
    }

}

export interface ImplementedWork {
    year: String;
    name: String;
    implementation: String;
    effectOnEconomics: String;
    effectOnSociety: String;
    effectOnEnvironment: String;
    effectOnOthers: String;
    id?:String;
}