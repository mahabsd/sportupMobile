import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolitiquesUtilisationPage } from './politiques-utilisation.page';

describe('PolitiquesUtilisationPage', () => {
  let component: PolitiquesUtilisationPage;
  let fixture: ComponentFixture<PolitiquesUtilisationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PolitiquesUtilisationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolitiquesUtilisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
