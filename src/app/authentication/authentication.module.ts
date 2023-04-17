import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessfullCreatedComponent } from './successfull-created/successfull-created.component';
import { ResetPwComponent } from './reset-pw/reset-pw.component';
import { ResetPwPasswordComponent } from './reset-pw-password/reset-pw-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SuccessfullCreatedComponent,
    ResetPwComponent,
    ResetPwPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
