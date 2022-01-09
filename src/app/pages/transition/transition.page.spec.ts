import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransitionPage } from './transition.page';

describe('TransitionPage', () => {
  let component: TransitionPage;
  let fixture: ComponentFixture<TransitionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
