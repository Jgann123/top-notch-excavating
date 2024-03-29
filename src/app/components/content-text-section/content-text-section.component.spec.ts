import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTextSectionComponent } from './content-text-section.component';

describe('ContentTextSectionComponent', () => {
  let component: ContentTextSectionComponent;
  let fixture: ComponentFixture<ContentTextSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentTextSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentTextSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
