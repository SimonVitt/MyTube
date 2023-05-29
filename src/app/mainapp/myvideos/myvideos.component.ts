import { Component } from '@angular/core';
import { VideoOverview } from 'src/app/interfaces/videooverview';
import { BackendmainService } from 'src/app/services/backendmain.service';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-myvideos',
  templateUrl: './myvideos.component.html',
  styleUrls: ['./myvideos.component.scss']
})
export class MyvideosComponent {
  currentPage: number = 1;
  totalNumberPages!: number;

  myVideos!: VideoOverview[];

  constructor(private dataService: DataServiceService){}

  async ngOnInit(){
    this.dataService.myVideosSubject.subscribe((response) => {
      if(response){
        this.totalNumberPages = response.results.length > 0 ? Math.ceil(response.count / response.results.length) : 1;
        this.myVideos = response.results as VideoOverview[];
      }
    })
    this.dataService.triggerMyVideos(this.currentPage);
  }

  async changePage(direction: string){
    this.currentPage += (direction === 'previous' ? -1 : 1);
    this.dataService.triggerMyVideos(this.currentPage);
  }

}
