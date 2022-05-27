import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentSignupComponent } from './student/student-signup/student-signup.component';
import { SpeakerSignupComponent } from './speaker/speaker-signup/speaker-signup.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { AuthGuard } from "./shared/auth.guard";
import { UserSigninComponent } from './user-signin/user-signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: UserSigninComponent },
  { path: 'student-signup', component: StudentSignupComponent },
  { path: 'speaker-signup', component: SpeakerSignupComponent },
  { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }