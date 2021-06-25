import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionMaterialPage } from './gestion-material.page';

describe('GestionMaterialPage', () => {
  let component: GestionMaterialPage;
  let fixture: ComponentFixture<GestionMaterialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionMaterialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
