import { BaseApiService } from '../../base-api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserRegisterService extends BaseApiService {

    constructor(private http: HttpClient) {
        super(http)
    }

    register(user) {
        return this.http.post<String>(this.host + "/api/register", user);
    }

    saveNormalUser(normalUser) {
        return this.http.post<String>(this.host + "/api/register", normalUser);
    }

    saveResearcher(researcher) {
        return this.http.post<String>(this.host + "/api/register", researcher);
    }

}


