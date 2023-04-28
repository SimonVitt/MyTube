import { Component } from '@angular/core';
import { VideoOverview } from 'src/app/interfaces/videooverview';
import { BackendmainService } from 'src/app/services/backendmain.service';

@Component({
  selector: 'app-myvideos',
  templateUrl: './myvideos.component.html',
  styleUrls: ['./myvideos.component.scss']
})
export class MyvideosComponent {

  myVideos$!: Promise<VideoOverview[]>;

  constructor(private backend: BackendmainService){}

  async ngOnInit(){
    this.myVideos$ = this.backend.getMyVideos() as Promise<VideoOverview[]>;
  }

}
