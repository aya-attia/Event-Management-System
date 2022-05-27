import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSignoutComponent } from './student-signout.component';

describe('StudentSignoutComponent', () => {
  let component: StudentSignoutComponent;
  let fixture: ComponentFixture<StudentSignoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSignoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSignoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
