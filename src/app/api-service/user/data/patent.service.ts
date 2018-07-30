import { Injectable } from "@angular/core";
import { BaseApiService } from "../../base-api.service";
import { HttpClient } from "@angular/common/http";



@Injectable()
export class PatentService extends BaseApiService {

    constructor(private http: HttpClient) {
        super(http)
    }

    getList(uniqueId: String) {
        return this.http.get<Patent[]>(this.host + "/api/user/patents?uniqueId=" + uniqueId);
    }

    savePatent(uniqueId: String, patent: FormData) {
        return this.http.post<String>(this.host + "/api/user/patent?uniqueId=" + uniqueId, patent);
    }

    updatePatent(uniqueId: String, patent: Patent) {
        return this.http.put<String>(this.host + "/api/user/patent?uniqueId=" + uniqueId, patent);
    }

    getPatent(uniqueId: String, id: String) {
        return this.http.get<Patent>(this.host + "/api/user/patent?uniqueId=" + uniqueId + "&id=" + id);
    }

}

export interface Patent {
    type: String;
    name: String;
    patentNo: String;
    requestNo: String;
    nameOfRequester: String;
    requestDate: String;
    approveDate: String;
    files: String[];
    id ?: String;
}