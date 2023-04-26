import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainappRoutingModule } from './mainapp-routing.module';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { UploadcontainerComponent } from './uploadcontainer/uploadcontainer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllvideosComponent } from './allvideos/allvideos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyvideosComponent } from './myvideos/myvideos.component';


@NgModule({
  declarations: [
    MaincontainerComponent,
    UploadcontainerComponent,
    AllvideosComponent,
    NavbarComponent,
    MyvideosComponent
  ],
  imports: [
    CommonModule,
    MainappRoutingModule,
    ReactiveFormsModule
  ]
})
export class MainappModule { }
