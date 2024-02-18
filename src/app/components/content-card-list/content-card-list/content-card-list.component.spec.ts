import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardListComponent } from './content-card-list.component';

describe('ContentCardListComponent', () => {
  let component: ContentCardListComponent;
  let fixture: ComponentFixture<ContentCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentCardListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
