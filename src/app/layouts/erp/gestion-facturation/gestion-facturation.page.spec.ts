import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionFacturationPage } from './gestion-facturation.page';

describe('GestionFacturationPage', () => {
  let component: GestionFacturationPage;
  let fixture: ComponentFixture<GestionFacturationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionFacturationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionFacturationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
