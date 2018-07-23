import { Injectable } from "@angular/core";
import { BaseApiService } from "../../base-api.service";
import { HttpClient } from "@angular/common/http";



@Injectable()
export class EducationService extends BaseApiService {

    constructor(private http: HttpClient) {
        super(http)
    }

    getList(uniqueId: String) {
        return this.http.get<Education[]>(this.host + "/api/user/educations?uniqueId=" + uniqueId);
    }

    saveEducation(uniqueId: String, education: Education) {
        return this.http.post<String>(this.host + "/api/user/education?uniqueId=" + uniqueId, education);
    }

    updateEducation(uniqueId: String, education: Education) {
        return this.http.put<String>(this.host + "/api/user/education?uniqueId=" + uniqueId, education);
    }

    getEducation(uniqueId: String, id: String){
        return this.http.get<Education>(this.host + "/api/user/education?uniqueId=" + uniqueId + "&id=" + id);
    }

}

export interface Education {
    instituteName: String;
    degreeName: String;
    subject: String;
    graduateYear: String;
    id?:String;
}