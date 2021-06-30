import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbonnerinviteramisPage } from './abonnerinviteramis.page';

describe('AbonnerinviteramisPage', () => {
  let component: AbonnerinviteramisPage;
  let fixture: ComponentFixture<AbonnerinviteramisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonnerinviteramisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbonnerinviteramisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
