import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertVenteModalPage } from './insert-vente-modal.page';

describe('InsertVenteModalPage', () => {
  let component: InsertVenteModalPage;
  let fixture: ComponentFixture<InsertVenteModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertVenteModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertVenteModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
