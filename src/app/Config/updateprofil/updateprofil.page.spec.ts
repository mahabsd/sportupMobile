import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateprofilPage } from './updateprofil.page';

describe('UpdateprofilPage', () => {
  let component: UpdateprofilPage;
  let fixture: ComponentFixture<UpdateprofilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateprofilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateprofilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
