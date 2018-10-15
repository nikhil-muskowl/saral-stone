import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComComponent } from './header-com.component';

describe('HeaderComComponent', () => {
  let component: HeaderComComponent;
  let fixture: ComponentFixture<HeaderComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
