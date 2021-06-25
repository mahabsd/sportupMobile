import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignKidsPage } from './sign-kids.page';

describe('SignKidsPage', () => {
  let component: SignKidsPage;
  let fixture: ComponentFixture<SignKidsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignKidsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignKidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
