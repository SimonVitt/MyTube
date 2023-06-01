import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { VideoOverview } from 'src/app/interfaces/videooverview';
import { BackendmainService } from 'src/app/services/backendmain.service';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-allvideos',
  templateUrl: './allvideos.component.html',
  styleUrls: ['./allvideos.component.scss']
})
export class AllvideosComponent {
  currentPage: number = 1;
  totalNumberPages!: number;
  videosPerPage: number = 4;

  allVideos!: VideoOverview[];

  constructor(private dataService: DataServiceService, private router: Router) { }

  async ngOnInit() {
    this.dataService.allVideosSubject.subscribe((response) => {
      if(response){
        this.totalNumberPages = response.results.length > 0 ? Math.ceil(response.count / this.videosPerPage) : 1;
        this.allVideos = response.results as VideoOverview[];
      }
    });
    this.dataService.triggerAllVideos(this.currentPage);
  }

  async changePage(direction: string) {
    this.currentPage += (direction === 'previous' ? -1 : 1);
    this.dataService.triggerAllVideos(this.currentPage);
  }

}
