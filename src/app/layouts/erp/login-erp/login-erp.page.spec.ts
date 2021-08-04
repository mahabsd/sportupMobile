import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginErpPage } from './login-erp.page';

describe('LoginErpPage', () => {
  let component: LoginErpPage;
  let fixture: ComponentFixture<LoginErpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginErpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginErpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
