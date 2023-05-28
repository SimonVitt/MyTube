import { ErrorHandler, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler{

  showError = new Subject<string>();

  constructor() { }

  handleError(error: Error): void {
    console.log(error)
    this.showError.next(error.name);
  }
}
