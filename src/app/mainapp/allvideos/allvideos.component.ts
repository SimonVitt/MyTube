import { Component } from '@angular/core';
import { VideoOverview } from 'src/app/interfaces/videooverview';
import { BackendmainService } from 'src/app/services/backendmain.service';

@Component({
  selector: 'app-allvideos',
  templateUrl: './allvideos.component.html',
  styleUrls: ['./allvideos.component.scss']
})
export class AllvideosComponent {

  allVideos$!: Promise<VideoOverview[]>;

  constructor(private backend: BackendmainService){}

  async ngOnInit(){
    this.allVideos$ = this.backend.getAllVideos() as Promise<VideoOverview[]>;
  }

}
