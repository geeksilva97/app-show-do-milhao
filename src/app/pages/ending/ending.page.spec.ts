import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EndingPage } from './ending.page';

describe('EndingPage', () => {
  let component: EndingPage;
  let fixture: ComponentFixture<EndingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EndingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
