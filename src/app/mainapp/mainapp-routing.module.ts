import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadcontainerComponent } from './uploadcontainer/uploadcontainer.component';
import { AllvideosComponent } from './allvideos/allvideos.component';
import { MyvideosComponent } from './myvideos/myvideos.component';

const routes: Routes = [
  { path:'upload', component: UploadcontainerComponent, pathMatch: 'full'},
  { path:'videos', component: AllvideosComponent, pathMatch: 'full'},
  { path:'myvideos', component: MyvideosComponent, pathMatch: 'full'},
  { path: '', redirectTo: 'videos', pathMatch: 'full' },
  { path: '**', redirectTo: 'videos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainappRoutingModule { }
