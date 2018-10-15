import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkDetailComponent } from './our-work-detail.component';

describe('OurWorkDetailComponent', () => {
  let component: OurWorkDetailComponent;
  let fixture: ComponentFixture<OurWorkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurWorkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWorkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
