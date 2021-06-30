import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionAdherentPage } from './gestion-adherent.page';

describe('GestionAdherentPage', () => {
  let component: GestionAdherentPage;
  let fixture: ComponentFixture<GestionAdherentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAdherentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionAdherentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
