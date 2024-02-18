import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTextImageSectionComponent } from './content-text-image-section.component';

describe('ContentTextImageSectionComponent', () => {
  let component: ContentTextImageSectionComponent;
  let fixture: ComponentFixture<ContentTextImageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentTextImageSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentTextImageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
