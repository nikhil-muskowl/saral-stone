import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBlogsComComponent } from './latest-blogs-com.component';

describe('LatestBlogsComComponent', () => {
  let component: LatestBlogsComComponent;
  let fixture: ComponentFixture<LatestBlogsComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestBlogsComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestBlogsComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
