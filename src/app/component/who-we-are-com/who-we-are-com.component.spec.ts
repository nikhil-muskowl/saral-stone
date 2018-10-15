import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAreComComponent } from './who-we-are-com.component';

describe('WhoWeAreComComponent', () => {
  let component: WhoWeAreComComponent;
  let fixture: ComponentFixture<WhoWeAreComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoWeAreComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWeAreComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
