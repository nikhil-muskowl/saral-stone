import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomComComponent } from './welcom-com.component';

describe('WelcomComComponent', () => {
  let component: WelcomComComponent;
  let fixture: ComponentFixture<WelcomComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
