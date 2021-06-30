import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistoriqueerpPage } from './historiqueerp.page';

describe('HistoriqueerpPage', () => {
  let component: HistoriqueerpPage;
  let fixture: ComponentFixture<HistoriqueerpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueerpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoriqueerpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
