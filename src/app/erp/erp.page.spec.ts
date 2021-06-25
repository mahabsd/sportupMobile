import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErpPage } from './erp.page';

describe('ErpPage', () => {
  let component: ErpPage;
  let fixture: ComponentFixture<ErpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
