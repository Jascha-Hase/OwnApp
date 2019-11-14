import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageViewComponent } from './first-page-view.component';

describe('FirstPageViewComponent', () => {
  let component: FirstPageViewComponent;
  let fixture: ComponentFixture<FirstPageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
