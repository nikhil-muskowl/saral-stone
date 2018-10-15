import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestProjectsComComponent } from './latest-projects-com.component';

describe('LatestProjectsComComponent', () => {
  let component: LatestProjectsComComponent;
  let fixture: ComponentFixture<LatestProjectsComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestProjectsComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestProjectsComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
