import { Injectable } from '@angular/core';
import { BackendcommunicationService } from './backendcommunication.service';
import { Router } from '@angular/router';
import { LoadingService } from './loading.service';
import { Logindata } from '../interfaces/logindata';
import { Tokenjson } from '../interfaces/tokenjson';
import * as jwt from 'jsonwebtoken';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private backend: BackendcommunicationService, private router: Router, private loadingService: LoadingService) { }

  async login(email: string, password: string) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    const data: Logindata = await this.backend.loginUser(formData) as Logindata;
    localStorage.setItem('username', data.username);
    localStorage.setItem('email', data.email);
    localStorage.setItem('publicKey', data.publickey)
    this.setTokens(data.tokens);
    this.loadingService.setLoading(false);
    this.router.navigateByUrl('main');
  }

  async logout() {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      await this.backend.logout(`{"refresh": ${refreshToken}}`);
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      localStorage.removeItem('publicKey');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    } catch (error) {
      console.log('Logout failed')
    }
  }

  setTokens(tokens: string) {
    const tokensAsJSON: Tokenjson = JSON.parse(tokens.replace(/'/g, '"'));
    localStorage.setItem('accessToken', tokensAsJSON.access);
    localStorage.setItem('refreshToken', tokensAsJSON.refresh);
  }

  async isAuthenticated() {
    const token = localStorage.getItem('accessToken');
    if (!token) return false;
    if (this.checkTokenExpired(token)) {
      return true;
    } else {
      return await this.refreshAccessToken();
    }
  }

  async refreshAccessToken() {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) return false;

    try {
      const tokens = await this.backend.refreshToken({"refresh": refreshToken});
      const tokensAsJSON: Tokenjson = tokens as Tokenjson;
      if (tokensAsJSON) {
        localStorage.setItem('refreshToken', tokensAsJSON.refresh);
        localStorage.setItem('accessToken', tokensAsJSON.access);
        return true;
      }
    } catch (error) {
      console.error('Error refreshing access token:', error);
    }
    return false;
  }

  checkTokenExpired(token: string) {
    console.log(token);
    debugger;
    const base64UrlPayload = token.split('.')[1];
    const base64Payload = this.base64UrlToBase64(base64UrlPayload);

    const expiry = (JSON.parse(window.atob(base64Payload))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  base64UrlToBase64(base64Url: string) {
    return base64Url.replace(/-/g, '+').replace(/_/g, '/');
  }
}
