import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerSignoutComponent } from './speaker-signout.component';

describe('SpeakerSignoutComponent', () => {
  let component: SpeakerSignoutComponent;
  let fixture: ComponentFixture<SpeakerSignoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerSignoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerSignoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
