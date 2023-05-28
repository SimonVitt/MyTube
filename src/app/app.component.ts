import { ChangeDetectorRef, Component, ErrorHandler, Inject } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yourMovies';
  errorName!: string;
  showError: boolean = false;

  loading: boolean = false;

  constructor(private loadingService: LoadingService, private cdr: ChangeDetectorRef, @Inject(ErrorHandler)private errorHandler: GlobalErrorHandlerService){}

  ngOnInit(){
    this.loadingService.loadingSubject.subscribe((status) => {
      this.loading = status;
      this.cdr.detectChanges();
    });
    this.errorHandler.showError.subscribe((errorName) => {
      this.errorName = errorName;
      this.showError = true;
    })
  }
}
