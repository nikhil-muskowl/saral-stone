import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComComponent } from './footer-com.component';

describe('FooterComComponent', () => {
  let component: FooterComComponent;
  let fixture: ComponentFixture<FooterComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
