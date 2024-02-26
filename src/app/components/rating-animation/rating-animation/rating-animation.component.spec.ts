import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingAnimationComponent } from './rating-animation.component';

describe('RatingAnimationComponent', () => {
  let component: RatingAnimationComponent;
  let fixture: ComponentFixture<RatingAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatingAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
