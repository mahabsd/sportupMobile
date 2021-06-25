import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShearchPage } from './shearch.page';

describe('ShearchPage', () => {
  let component: ShearchPage;
  let fixture: ComponentFixture<ShearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
