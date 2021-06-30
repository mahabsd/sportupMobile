import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertAdherentModalPage } from './insert-adherent-modal.page';

describe('InsertAdherentModalPage', () => {
  let component: InsertAdherentModalPage;
  let fixture: ComponentFixture<InsertAdherentModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertAdherentModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertAdherentModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
