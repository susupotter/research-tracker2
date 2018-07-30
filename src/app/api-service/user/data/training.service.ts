import { Injectable } from "@angular/core";
import { BaseApiService } from "../../base-api.service";
import { HttpClient } from "@angular/common/http";



@Injectable()
export class TrainingService extends BaseApiService {

    constructor(private http: HttpClient) {
        super(http)
    }

    getList(uniqueId: String) {
        return this.http.get<Training[]>(this.host + "/api/user/trainings?uniqueId=" + uniqueId);
    }

    saveTraining(uniqueId: String, training: Training) {
        return this.http.post<String>(this.host + "/api/user/training?uniqueId=" + uniqueId, training);
    }

    updateTraining(uniqueId: String, training: Training) {
        return this.http.put<String>(this.host + "/api/user/training?uniqueId=" + uniqueId, training);
    }

    getTraining(uniqueId: String, id: String) {
        return this.http.get<Training>(this.host + "/api/user/training?uniqueId=" + uniqueId + "&id=" + id);
    }

}

export interface Training {
    date: String;
    trainingName: String;
    holderName: String;
    country: String;
    place: String;
    details: String;
    id?:String;
}