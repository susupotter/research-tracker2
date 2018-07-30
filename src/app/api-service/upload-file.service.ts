import { Injectable } from "@angular/core";
import { BaseApiService } from "./base-api.service";
import { HttpClient } from "@angular/common/http";
import { RequestOptions } from "@angular/http";



@Injectable()
export class UploadFileService extends BaseApiService {

    constructor(private http: HttpClient) {
        super(http);
    }

    uploadFiles(fileList: File[]){

    }

    uploadFile(uniqueId: String, formData: FormData) {
        return this.http.post<TempFile>(this.host + '/api/file/' +  uniqueId, formData);


        /*let headers = this.tokenService.currentAuthHeaders;
        headers.delete('Content-Type');
        let options = new RequestOptions({ headers: headers });
    
        return this.http.post({
          url: 'http://localhost:3000/api/projects/${id}/upload',
          body: formData,
          headers: options.headers
        }).map(res => res.json());*/
      
    }

}

export interface TempFile {
    fileName:String;
}