import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerDeclineEventComponent } from './speaker-decline-event.component';

describe('SpeakerDeclineEventComponent', () => {
  let component: SpeakerDeclineEventComponent;
  let fixture: ComponentFixture<SpeakerDeclineEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerDeclineEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerDeclineEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
