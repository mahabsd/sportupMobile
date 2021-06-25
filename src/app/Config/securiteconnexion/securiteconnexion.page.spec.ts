import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SecuriteconnexionPage } from './securiteconnexion.page';

describe('SecuriteconnexionPage', () => {
  let component: SecuriteconnexionPage;
  let fixture: ComponentFixture<SecuriteconnexionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuriteconnexionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SecuriteconnexionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
