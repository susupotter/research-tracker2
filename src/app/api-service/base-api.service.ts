import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseApiService {
  host: String = "http://localhost:8080";

  constructor(http: HttpClient) { 
    
  }



}