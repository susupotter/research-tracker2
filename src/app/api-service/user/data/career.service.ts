import { Injectable } from "@angular/core";
import { BaseApiService } from "../../base-api.service";
import { HttpClient } from "@angular/common/http";



@Injectable()
export class CareerService extends BaseApiService {

    constructor(private http: HttpClient) {
        super(http)
    }

    getList(uniqueId: String) {
        return this.http.get<Career[]>(this.host + "/api/user/careers?uniqueId=" + uniqueId);
    }

    saveCareer(uniqueId: String, career: Career) {
        return this.http.post<String>(this.host + "/api/user/career?uniqueId=" + uniqueId, career);
    }

    updateCareer(uniqueId: String, career: Career) {
        return this.http.put<String>(this.host + "/api/user/career?uniqueId=" + uniqueId, career);
    }

    getCareer(uniqueId: String, id: String) {
        return this.http.get<Career>(this.host + "/api/user/career?uniqueId=" + uniqueId + "&id=" + id);
    }

}

export interface Career {
    startDate: String,
    endDate: String,
    organizationName: String,
    position: String
    id?: String;
}