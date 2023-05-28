import { Component } from '@angular/core';
import { VideoOverview } from 'src/app/interfaces/videooverview';
import { BackendmainService } from 'src/app/services/backendmain.service';

@Component({
  selector: 'app-allvideos',
  templateUrl: './allvideos.component.html',
  styleUrls: ['./allvideos.component.scss']
})
export class AllvideosComponent {
  currentPage: number = 1;
  totalNumberPages!: number;

  allVideos!: VideoOverview[];

  constructor(private backend: BackendmainService){}

  async ngOnInit(){
    const allVidObject = await this.backend.getAllVideos(this.currentPage) as any;
    this.totalNumberPages = allVidObject.results.length > 0 ? Math.ceil(allVidObject.count / allVidObject.results.length) : 1;
    this.allVideos = allVidObject.results as VideoOverview[];
  }

  async changePage(direction: string){
    this.currentPage += (direction === 'previous' ? -1 : 1);
    const allVidObject = await this.backend.getAllVideos(this.currentPage) as any;
    this.allVideos = allVidObject.results as VideoOverview[];
  }

}
