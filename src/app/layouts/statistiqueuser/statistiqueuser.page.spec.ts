import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatistiqueuserPage } from './statistiqueuser.page';

describe('StatistiqueuserPage', () => {
  let component: StatistiqueuserPage;
  let fixture: ComponentFixture<StatistiqueuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiqueuserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatistiqueuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
