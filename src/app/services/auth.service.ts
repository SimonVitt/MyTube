import { Injectable } from '@angular/core';
import { BackendcommunicationService } from './backendcommunication.service';
import { Router } from '@angular/router';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private backend: BackendcommunicationService, private router: Router, private loadingService: LoadingService) { }

  async login(email: string, password: string){
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    await this.backend.loginUser(formData);
    this.loadingService.setLoading(false);
    this.router.navigateByUrl('maincontainer/');
  }
}
