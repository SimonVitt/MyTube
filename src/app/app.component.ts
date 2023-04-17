import { ChangeDetectorRef, Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yourMovies';

  loading: boolean = false;

  constructor(private loadingService: LoadingService, private cdr: ChangeDetectorRef){}

  ngOnInit(){
    this.loadingService.loadingSubject.subscribe((status) => {
      this.loading = status;
      this.cdr.detectChanges();
    });
  }
}
