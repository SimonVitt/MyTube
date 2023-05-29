import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VideoOverview } from 'src/app/interfaces/videooverview';
import { BackendmainService } from 'src/app/services/backendmain.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  allVideosSubject = new BehaviorSubject<any>(null);
  myVideosSubject = new BehaviorSubject<any>(null);

  constructor(private backend: BackendmainService) { }

  async triggerAllVideos(page: number){
    const response = await this.backend.getAllVideos(page) as any;
    this.allVideosSubject.next(response);
  }

  async triggerMyVideos(page: number){
    const response = await this.backend.getMyVideos(page) as any;
    this.myVideosSubject.next(response);
  }
}
