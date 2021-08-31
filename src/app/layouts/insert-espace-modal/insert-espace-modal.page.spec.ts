import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsertEspaceModalPage } from './insert-espace-modal.page';

describe('InsertEspaceModalPage', () => {
  let component: InsertEspaceModalPage;
  let fixture: ComponentFixture<InsertEspaceModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertEspaceModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsertEspaceModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
