import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigninformationPage } from './signinformation.page';

describe('SigninformationPage', () => {
  let component: SigninformationPage;
  let fixture: ComponentFixture<SigninformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 