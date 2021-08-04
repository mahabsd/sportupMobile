import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionVentePage } from './gestion-vente.page';

describe('GestionVentePage', () => {
  let component: GestionVentePage;
  let fixture: ComponentFixture<GestionVentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionVentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionVentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
