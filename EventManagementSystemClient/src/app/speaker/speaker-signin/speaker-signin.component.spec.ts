import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerSigninComponent } from './speaker-signin.component';

describe('SpeakerSigninComponent', () => {
  let component: SpeakerSigninComponent;
  let fixture: ComponentFixture<SpeakerSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
