import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionPage } from './question.page';

describe('QuestionPage', () => {
  let component: QuestionPage;
  let fixture: ComponentFixture<QuestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
