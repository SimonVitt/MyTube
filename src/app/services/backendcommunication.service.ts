import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendcommunicationService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  register(body: FormData){
    return lastValueFrom(this.http.post(this.BASE_URL + '/members/register/', body));
  }

  verifyUser(body: FormData){
    return lastValueFrom(this.http.post(this.BASE_URL + '/members/verify/', body));
  }

  loginUser(body: FormData){
    return lastValueFrom(this.http.post(this.BASE_URL + '/members/login/', body));
  }

  sendVerifyEmail(body: FormData){
    return lastValueFrom(this.http.post(this.BASE_URL + '/members/sendverifyagain/', body));
  }
}
