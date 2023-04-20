import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { EMPTY, Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { BackendcommunicationService } from './backendcommunication.service';
import { Tokenjson } from '../interfaces/tokenjson';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  refresh: boolean = false;

  constructor(private router: Router, private backend: BackendcommunicationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('accessToken');
    if (token) {
      request = request.clone({
        setHeaders:{
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
    }
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401 && !this.refresh) {
          this.refresh = true;
          const refreshToken = localStorage.getItem('refreshToken');
          if(refreshToken){
            this.backend.refreshToken({"refresh": refreshToken}).then((tokens) => {
              const tokensAsJSON: Tokenjson = tokens as Tokenjson;
              localStorage.setItem('refreshToken', tokensAsJSON.refresh);
              localStorage.setItem('accessToken', tokensAsJSON.access);

              return next.handle(request.clone({
                setHeaders:{
                  Authorization: `Bearer ${tokensAsJSON.access}`
                }
              }));
            });
          }
        }
        this.refresh = false;
        return throwError(() => new Error(err.message));
      })
    );
  }
}
