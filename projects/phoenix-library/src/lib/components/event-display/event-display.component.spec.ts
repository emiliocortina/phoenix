import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDisplayComponent } from './event-display.component';
import { PhoenixLibraryModule } from '../../phoenix-library.module';

describe('EventDisplayComponent', () => {
  let component: EventDisplayComponent;
  let fixture: ComponentFixture<EventDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventDisplayComponent],
      imports: [PhoenixLibraryModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
