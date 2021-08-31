import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertMaterialModalPage } from './insert-material-modal.page';

describe('InsertMaterialModalPage', () => {
  let component: InsertMaterialModalPage;
  let fixture: ComponentFixture<InsertMaterialModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertMaterialModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertMaterialModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
