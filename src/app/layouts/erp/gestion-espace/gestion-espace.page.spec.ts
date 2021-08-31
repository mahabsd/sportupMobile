import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionEspacePage } from './gestion-espace.page';

describe('GestionEspacePage', () => {
  let component: GestionEspacePage;
  let fixture: ComponentFixture<GestionEspacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEspacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionEspacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
