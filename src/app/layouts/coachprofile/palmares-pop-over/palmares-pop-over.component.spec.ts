import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PalmaresPopOverComponent } from './palmares-pop-over.component';

describe('PalmaresPopOverComponent', () => {
  let component: PalmaresPopOverComponent;
  let fixture: ComponentFixture<PalmaresPopOverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PalmaresPopOverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PalmaresPopOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
