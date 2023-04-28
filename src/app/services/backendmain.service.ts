import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendmainService {

  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  uploadVideo(body: FormData){
    return lastValueFrom(this.http.post(this.BASE_URL + '/api/v1/videos/', body));
  }

  getAllVideos(){
    return lastValueFrom(this.http.get(this.BASE_URL + '/api/v1/videos/'));
  }

  getMyVideos(){
    return lastValueFrom(this.http.get(this.BASE_URL + '/api/v1/myvideos/'));
  }
}
