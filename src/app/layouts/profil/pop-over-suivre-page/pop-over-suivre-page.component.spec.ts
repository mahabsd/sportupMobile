import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopOverSuivrePageComponent } from './pop-over-suivre-page.component';

describe('PopOverSuivrePageComponent', () => {
  let component: PopOverSuivrePageComponent;
  let fixture: ComponentFixture<PopOverSuivrePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopOverSuivrePageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopOverSuivrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
