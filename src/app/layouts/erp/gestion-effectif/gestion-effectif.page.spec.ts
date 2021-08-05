import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GestionEffectifPage } from './gestion-effectif.page';
describe('GestionEffectifPage', () => {
  let component: GestionEffectifPage;
  let fixture: ComponentFixture<GestionEffectifPage>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEffectifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    fixture = TestBed.createComponent(GestionEffectifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});