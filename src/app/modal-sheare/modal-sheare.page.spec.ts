import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalShearePage } from './modal-sheare.page';

describe('ModalShearePage', () => {
  let component: ModalShearePage;
  let fixture: ComponentFixture<ModalShearePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalShearePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalShearePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
