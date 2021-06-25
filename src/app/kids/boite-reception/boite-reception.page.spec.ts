import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoiteReceptionPage } from './boite-reception.page';

describe('BoiteReceptionPage', () => {
  let component: BoiteReceptionPage;
  let fixture: ComponentFixture<BoiteReceptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiteReceptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoiteReceptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
