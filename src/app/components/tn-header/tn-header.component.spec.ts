import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
//import { IonicModule } from '@ionic/angular';

import { TnHeaderComponent } from './tn-header.component';

describe('TnHeaderComponent', () => {
  let component: TnHeaderComponent;
  let fixture: ComponentFixture<TnHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TnHeaderComponent ],
      imports: []  //IonicModule.forRoot()
    }).compileComponents();

    fixture = TestBed.createComponent(TnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
