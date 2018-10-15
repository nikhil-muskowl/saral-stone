import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClientsComComponent } from './our-clients-com.component';

describe('OurClientsComComponent', () => {
  let component: OurClientsComComponent;
  let fixture: ComponentFixture<OurClientsComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurClientsComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurClientsComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
