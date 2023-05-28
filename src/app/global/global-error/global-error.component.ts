import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss']
})
export class GlobalErrorComponent {

  @Input('errorName') errorName!: string;

  @Output() showErrorEvent = new EventEmitter<boolean>();

  constructor(private authService: AuthService){}

  closePopUp(){
    this.showErrorEvent.emit(false);
    this.authService.logout();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

}
