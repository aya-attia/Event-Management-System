import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentToEventComponent } from './add-student-to-event.component';

describe('AddStudentToEventComponent', () => {
  let component: AddStudentToEventComponent;
  let fixture: ComponentFixture<AddStudentToEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentToEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentToEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
