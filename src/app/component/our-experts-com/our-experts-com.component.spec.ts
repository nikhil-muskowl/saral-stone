import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurExpertsComComponent } from './our-experts-com.component';

describe('OurExpertsComComponent', () => {
  let component: OurExpertsComComponent;
  let fixture: ComponentFixture<OurExpertsComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurExpertsComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurExpertsComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
