import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainappRoutingModule } from './mainapp-routing.module';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { UploadcontainerComponent } from './uploadcontainer/uploadcontainer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllvideosComponent } from './allvideos/allvideos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyvideosComponent } from './myvideos/myvideos.component';
import { SmallVidContainerComponent } from './small-vid-container/small-vid-container.component';
import { DateFormatPipe } from '../pipes/date-format.pipe';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { SmallMyvidContainerComponent } from './small-myvid-container/small-myvid-container.component';


@NgModule({
  declarations: [
    MaincontainerComponent,
    UploadcontainerComponent,
    AllvideosComponent,
    NavbarComponent,
    MyvideosComponent,
    SmallVidContainerComponent,
    DateFormatPipe,
    VideoDetailsComponent,
    SmallMyvidContainerComponent
  ],
  imports: [
    CommonModule,
    MainappRoutingModule,
    ReactiveFormsModule
  ]
})
export class MainappModule { }
