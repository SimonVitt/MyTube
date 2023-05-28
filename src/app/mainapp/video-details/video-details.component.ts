import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoDetail } from 'src/app/interfaces/videodetail';
import { BackendmainService } from 'src/app/services/backendmain.service';


@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent {
  @ViewChild('videoPlayer') videoPlayer: ElementRef | undefined;

  videoId: number | undefined;
  videoDetails: VideoDetail | undefined;

  constructor(private route: ActivatedRoute, private backend: BackendmainService){}

  ngOnInit(){
    this.route.params.subscribe(async params => {
      this.videoId = params['id'] as number;
      this.videoDetails = await this.backend.getVideoById(this.videoId) as VideoDetail;
    });
  }

  changeResolution(event: Event) {
    const resolution = (event.target as HTMLSelectElement).value;
    const sources = Array.from(this.videoPlayer?.nativeElement.getElementsByTagName('source')) as HTMLSourceElement[];

    sources.forEach(source => {
        if (source.getAttribute('label') === resolution) {
            this.videoPlayer!.nativeElement.src = source.src;
            this.videoPlayer!.nativeElement.load();
            this.videoPlayer!.nativeElement.play();
        }
    });
}
}
