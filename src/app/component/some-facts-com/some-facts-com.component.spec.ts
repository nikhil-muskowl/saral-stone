import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeFactsComComponent } from './some-facts-com.component';

describe('SomeFactsComComponent', () => {
  let component: SomeFactsComComponent;
  let fixture: ComponentFixture<SomeFactsComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeFactsComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeFactsComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
