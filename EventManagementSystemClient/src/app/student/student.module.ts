import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { BrowserModule } from '@angular/platform-browser';
// import { AuthInterceptor } from './../shared/authconfig.interceptor';
import { RouterModule } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { StudentSignoutComponent } from './student-signout/student-signout.component';




@NgModule({
  declarations: [
    StudentProfileComponent,
    StudentSignupComponent,
    StudentSigninComponent,
    StudentEditComponent,
    StudentSignoutComponent
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
    StudentProfileComponent,
    StudentSignupComponent,
    StudentSigninComponent,
    StudentEditComponent
  ],

  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AuthInterceptor,
  //     multi: true
  //   }
  // ]
})
export class StudentModule { }
