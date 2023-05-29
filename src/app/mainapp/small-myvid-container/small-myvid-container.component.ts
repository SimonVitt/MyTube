import { Component, Input } from '@angular/core';
import { VideoOverview } from 'src/app/interfaces/videooverview';
import { BackendmainService } from 'src/app/services/backendmain.service';
import { LoadingService } from 'src/app/services/loading.service';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-small-myvid-container',
  templateUrl: './small-myvid-container.component.html',
  styleUrls: ['./small-myvid-container.component.scss']
})
export class SmallMyvidContainerComponent {

  @Input('video') video!: VideoOverview;

  constructor(private backend: BackendmainService, private loading: LoadingService, private dataService: DataServiceService){}

  async deleteVideo(event: Event){
    event.stopPropagation();
    this.loading.setLoading(true);
    await this.backend.deleteMyVideo(this.video.id);
    this.loading.setLoading(false);
    this.dataService.triggerAllVideos(1);
    this.dataService.triggerMyVideos(1);
  }

}
