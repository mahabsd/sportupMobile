import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeErpPage } from './home-erp.page';

describe('HomeErpPage', () => {
  let component: HomeErpPage;
  let fixture: ComponentFixture<HomeErpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeErpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeErpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
