import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceImagesComponent } from './service-images.component';

describe('ServiceImagesComponent', () => {
  let component: ServiceImagesComponent;
  let fixture: ComponentFixture<ServiceImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
