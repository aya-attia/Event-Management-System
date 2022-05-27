import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerSignupComponent } from './speaker-signup.component';

describe('SpeakerSignupComponent', () => {
  let component: SpeakerSignupComponent;
  let fixture: ComponentFixture<SpeakerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
