import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { EMPTY, Observable, catchError, switchMap, throwError, from } from 'rxjs';
import { Router } from '@angular/router';
import { BackendcommunicationService } from './backendcommunication.service';
import { Tokenjson } from '../interfaces/tokenjson';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  refresh: boolean = false;

  constructor(private router: Router, private backend: BackendcommunicationService, private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('accessToken');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
    }
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401 && !this.refresh) {
          this.refresh = true;
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            return from(
              this.backend.refreshToken({ refresh: refreshToken })
            ).pipe(
              switchMap((response: any) => {
                const tokensAsJSON: Tokenjson = response.tokens as Tokenjson;
                localStorage.setItem('refreshToken', tokensAsJSON.refresh);
                localStorage.setItem('accessToken', tokensAsJSON.access);

                return next.handle(
                  request.clone({
                    setHeaders: {
                      Authorization: `Bearer ${tokensAsJSON.access}`,
                    },
                  })
                );
              }),
              catchError((err: HttpErrorResponse) => {
                this.refresh = false;
                this.authService.logout();
                return throwError(() => err);
              })
            );
          }
        }
        this.refresh = false;
        return throwError(() => err);
      })
    );
  }
}
