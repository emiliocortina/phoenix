import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectSelectionComponent } from './object-selection.component';
import { PhoenixLibraryModule } from '../../../phoenix-library.module';

describe('ObjectSelectionComponent', () => {
  let component: ObjectSelectionComponent;
  let fixture: ComponentFixture<ObjectSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PhoenixLibraryModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
