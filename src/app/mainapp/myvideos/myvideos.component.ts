import { Component } from '@angular/core';
import { VideoOverview } from 'src/app/interfaces/videooverview';
import { BackendmainService } from 'src/app/services/backendmain.service';

@Component({
  selector: 'app-myvideos',
  templateUrl: './myvideos.component.html',
  styleUrls: ['./myvideos.component.scss']
})
export class MyvideosComponent {
  currentPage: number = 1;
  totalNumberPages!: number;

  myVideos!: VideoOverview[];

  constructor(private backend: BackendmainService){}

  async ngOnInit(){
    const myVidObject = await this.backend.getMyVideos(this.currentPage) as any;
    this.totalNumberPages = myVidObject.results.length > 0 ? Math.ceil(myVidObject.count / myVidObject.results.length) : 1;
    this.myVideos = myVidObject.results as VideoOverview[];
  }

  async changePage(direction: string){
    this.currentPage += (direction === 'previous' ? -1 : 1);
    const allVidObject = await this.backend.getAllVideos(this.currentPage) as any;
    this.myVideos = allVidObject.results as VideoOverview[];
  }

}
