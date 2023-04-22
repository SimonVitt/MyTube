import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

interface RefreshTokenRequest {
  refresh: string;
}

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

  refreshToken(body: RefreshTokenRequest){
    return lastValueFrom(this.http.post(this.BASE_URL + '/members/refresh/', body));
  }

  logout(refreshToken: string){
    const body = {
      "refresh": refreshToken
    };
    return lastValueFrom(this.http.post(this.BASE_URL + '/members/logout/', body));
  }

  forgotPassword(body: FormData){
    return lastValueFrom(this.http.post(this.BASE_URL + '/members/forgot-password/', body));
  }

  resetPassword(body: FormData){
    return lastValueFrom(this.http.post(this.BASE_URL + '/members/reset-password/', body));
  }

  
}
