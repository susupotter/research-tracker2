import { BaseApiService } from '../../base-api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService extends BaseApiService {

    constructor(private http: HttpClient) {
        super(http)
    }

    public listAllUser() {
        return this.http.get<UserData[]>(this.host + '/api/user/users');
    }

}

export interface UserData {
    username: String;
    uniqueId: String;
    nameSurname: String;
    userType: String;
}