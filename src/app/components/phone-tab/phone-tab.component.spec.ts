import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneTabComponent } from './phone-tab.component';

describe('PhoneTabComponent', () => {
  let component: PhoneTabComponent;
  let fixture: ComponentFixture<PhoneTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
