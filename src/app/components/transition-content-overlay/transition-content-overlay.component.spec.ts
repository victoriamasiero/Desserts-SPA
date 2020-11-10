import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionContentOverlayComponent } from './transition-content-overlay.component';

describe('TransitionContentOverlayComponent', () => {
  let component: TransitionContentOverlayComponent;
  let fixture: ComponentFixture<TransitionContentOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitionContentOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionContentOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
