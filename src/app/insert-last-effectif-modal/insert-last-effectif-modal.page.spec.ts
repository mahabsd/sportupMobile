import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertLastEffectifModalPage } from './insert-last-effectif-modal.page';

describe('InsertLastEffectifModalPage', () => {
  let component: InsertLastEffectifModalPage;
  let fixture: ComponentFixture<InsertLastEffectifModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertLastEffectifModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertLastEffectifModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
