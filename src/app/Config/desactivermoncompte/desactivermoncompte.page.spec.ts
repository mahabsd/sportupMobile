import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesactivermoncomptePage } from './desactivermoncompte.page';

describe('DesactivermoncomptePage', () => {
  let component: DesactivermoncomptePage;
  let fixture: ComponentFixture<DesactivermoncomptePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesactivermoncomptePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesactivermoncomptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
