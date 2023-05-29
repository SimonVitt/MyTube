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

  getAllVideos(page: number){
    return lastValueFrom(this.http.get(this.BASE_URL + `/api/v1/videos/?page=${page}`));
  }

  getMyVideos(page:number){
    return lastValueFrom(this.http.get(this.BASE_URL + `/api/v1/myvideos/?page=${page}`));
  }

  getVideoById(id: number){
    return lastValueFrom(this.http.get(this.BASE_URL + `/api/v1/videos/${id}`));
  }

  deleteMyVideo(id: number){
    return lastValueFrom(this.http.delete(this.BASE_URL + `/api/v1/myvideos/${id}`));    
  }
}
