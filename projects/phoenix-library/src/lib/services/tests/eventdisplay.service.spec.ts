import { TestBed } from '@angular/core/testing';

import { EventdisplayService } from '../eventdisplay.service';
import { PhoenixLibraryModule } from '../../phoenix-library.module';

describe('EventdisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [PhoenixLibraryModule] }));

  it('should be created', () => {
    const service: EventdisplayService = TestBed.inject(EventdisplayService);
    expect(service).toBeTruthy();
  });
});
