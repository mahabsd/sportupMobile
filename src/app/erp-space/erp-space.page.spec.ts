import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErpSpacePage } from './erp-space.page';

describe('ErpSpacePage', () => {
  let component: ErpSpacePage;
  let fixture: ComponentFixture<ErpSpacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpSpacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErpSpacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
