import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoriquepersonnelPage } from './historiquepersonnel.page';

describe('HistoriquepersonnelPage', () => {
  let component: HistoriquepersonnelPage;
  let fixture: ComponentFixture<HistoriquepersonnelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriquepersonnelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoriquepersonnelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
