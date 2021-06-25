import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionLastEffectifPage } from './gestion-last-effectif.page';

describe('GestionLastEffectifPage', () => {
  let component: GestionLastEffectifPage;
  let fixture: ComponentFixture<GestionLastEffectifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionLastEffectifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionLastEffectifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
