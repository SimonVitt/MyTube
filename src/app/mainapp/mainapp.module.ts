import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainappRoutingModule } from './mainapp-routing.module';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';


@NgModule({
  declarations: [
    MaincontainerComponent
  ],
  imports: [
    CommonModule,
    MainappRoutingModule
  ]
})
export class MainappModule { }
