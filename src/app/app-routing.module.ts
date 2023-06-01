import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ResetPwComponent } from './authentication/reset-pw/reset-pw.component';
import { SuccessfullCreatedComponent } from './authentication/successfull-created/successfull-created.component';
import { ResetPwPasswordComponent } from './authentication/reset-pw-password/reset-pw-password.component';
import { MaincontainerComponent } from './mainapp/maincontainer/maincontainer.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'new-password/:token', component: ResetPwPasswordComponent, pathMatch: 'full'},
  { path:'account-created/:token', component: SuccessfullCreatedComponent, pathMatch: 'full'},
  { path:'reset-password', component: ResetPwComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'signup', component: SignupComponent, pathMatch: 'full'},
  { path: 'home', component: MaincontainerComponent, canActivate: [AuthGuard], loadChildren: () => import('./mainapp/mainapp.module').then(m => m.MainappModule)},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
