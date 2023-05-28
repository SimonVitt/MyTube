import { Component, Input } from '@angular/core';
import { VideoOverview } from 'src/app/interfaces/videooverview';
import { DateFormatPipe } from 'src/app/pipes/date-format.pipe';

@Component({
  selector: 'app-small-vid-container',
  templateUrl: './small-vid-container.component.html',
  styleUrls: ['./small-vid-container.component.scss']
})
export class SmallVidContainerComponent {

  @Input('video') video!: VideoOverview;

  createImageUrl(file: File): string {
    console.log(this.video.author);
    return URL.createObjectURL(file);
  }

}
