import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { DeleteSpeakerComponent } from './delete-speaker/delete-speaker.component';
import { EditSpeakerComponent } from './edit-speaker/edit-speaker.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { AddSpeakerToEventComponent } from './add-speaker-to-event/add-speaker-to-event.component';
import { AddStudentToEventComponent } from './add-student-to-event/add-student-to-event.component';
import { AdminSignoutComponent } from './admin-signout/admin-signout.component';



@NgModule({
  declarations: [
    AdminSigninComponent,
    DeleteSpeakerComponent,
    EditSpeakerComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    AddEventComponent,
    EditEventComponent,
    DeleteEventComponent,
    StudentListComponent,
    SpeakerListComponent,
    EventListComponent,
    AddSpeakerToEventComponent,
    AddStudentToEventComponent,
    AdminSignoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
