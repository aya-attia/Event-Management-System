import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerSignupComponent } from './speaker-signup/speaker-signup.component';
import { SpeakerSigninComponent } from './speaker-signin/speaker-signin.component';
import { SpeakerProfileComponent } from './speaker-profile/speaker-profile.component';
import { SpeakerDeclineEventComponent } from './speaker-decline-event/speaker-decline-event.component';
import { SpeakerSignoutComponent } from './speaker-signout/speaker-signout.component';
import { BrowserModule } from '@angular/platform-browser';
// import { AuthInterceptor } from './../shared/authconfig.interceptor';
import { RouterModule } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SpeakerSignupComponent,
    SpeakerSigninComponent,
    SpeakerProfileComponent,
    SpeakerDeclineEventComponent,
    SpeakerSignoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // AuthInterceptor,
    RouterModule
  ],
  exports:[
    SpeakerSignupComponent,
    SpeakerSigninComponent,
    SpeakerProfileComponent,
    SpeakerDeclineEventComponent,
    SpeakerSignoutComponent
  ],
})
export class SpeakerModule { }
