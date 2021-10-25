import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayImgProfilKidsComponent } from './display-img-profil-kids.component';

describe('DisplayImgProfilKidsComponent', () => {
  let component: DisplayImgProfilKidsComponent;
  let fixture: ComponentFixture<DisplayImgProfilKidsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayImgProfilKidsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayImgProfilKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
