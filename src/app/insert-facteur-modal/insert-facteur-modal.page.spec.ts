import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertFacteurModalPage } from './insert-facteur-modal.page';

describe('InsertFacteurModalPage', () => {
  let component: InsertFacteurModalPage;
  let fixture: ComponentFixture<InsertFacteurModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertFacteurModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertFacteurModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
