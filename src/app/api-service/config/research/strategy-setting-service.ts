import { Injectable } from '@angular/core';
import { BaseApiService } from '../../base-api.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class StrategySettingService extends BaseApiService {

    constructor(private http: HttpClient) {
        super(http)
    }

    getFundYearList() {
        return this.http.get<FundYear[]>(this.host + "/api/config/strategy/fundYears");
    }

    saveFundYear(fundYear: FundYear) {
        return this.http.post<String>(this.host + "/api/config/strategy/fundYear", fundYear);
    }

    updateFundYear(fundYear: FundYear) {
        return this.http.put<String>(this.host + "/api/config/strategy/fundYear", fundYear);
    }


    getStrategyTypeList() {
        return this.http.get<StrategyType[]>(this.host + "/api/config/strategy/types");
    }

    getStrategyTypeListByFundYearId(fundYearId: string) {
        let params: HttpParams = new HttpParams();
        params.set("fundYearId", fundYearId);
        return this.http.get<StrategyType[]>(this.host + "/api/config/strategy/types?fundYearId="+fundYearId);
    }

    saveStrategyType(strategyType: StrategyType) {
        return this.http.post<StrategyType>(this.host + "/api/config/strategy/type", strategyType);
    }

    updateStrategyType(strategyType: StrategyType) {
        return this.http.put<StrategyType>(this.host + "/api/config/strategy/type", strategyType);
    }

    getStrategyListByStrategyTypeId(strategyTypeId: string) {
        let params: HttpParams = new HttpParams();
        params.set("strategyTypeId", strategyTypeId);
        return this.http.get<Strategy[]>(this.host + "/api/config/strategy/strategies?strategyTypeId=" + strategyTypeId);
    }

    saveStrategy(strategy: Strategy) {
        return this.http.post<Strategy>(this.host + "/api/config/strategy/strategy", strategy);
    }

    updateStrategy(strategy: Strategy) {
        return this.http.put<Strategy>(this.host + "/api/config/strategy/strategy", strategy);
    }

    getObjectiveListByStrategyId(strategyId: string) {
        let params: HttpParams = new HttpParams();
        params.set("strategyId", strategyId);
        return this.http.get<Objective[]>(this.host + "/api/config/strategy/objectives?strategyId=" + strategyId);
    }

    saveObjective(objective: Objective) {
        return this.http.post<Objective>(this.host + "/api/config/strategy/objective", objective);
    }

    updateObjective(objective: Objective) {
        return this.http.put<Objective>(this.host + "/api/config/strategy/objective", objective);
    }

    getIssueListByObjectiveId(objectiveId: string) {
        let params: HttpParams = new HttpParams();
        params.set("objectiveId", objectiveId);
        return this.http.get<Objective[]>(this.host + "/api/config/strategy/issue?objectiveId=" + objectiveId);
    }

    saveIssue(issue: Objective) {
        return this.http.post<Objective>(this.host + "/api/config/strategy/issue", issue);
    }

    updateIssue(issue: Objective) {
        return this.http.put<Objective>(this.host + "/api/config/strategy/issue", issue);
    }
}

export interface FundYear {
    id: String;
    year: String;
}

export interface StrategyType {
    id: String;
    strategyType: String;
    fundYearId: String;
}

export interface Strategy {
    id: String;
    strategy: String;
    strategyTypeId: String;
}

export interface Objective {
    id: String;
    objective: String;
    strategyId: String;
}