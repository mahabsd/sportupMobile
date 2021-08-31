import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReactionsPage } from './reactions.page';

describe('ReactionsPage', () => {
  let component: ReactionsPage;
  let fixture: ComponentFixture<ReactionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
