import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGruntRequestRefundPage } from './view-grunt-request-refund.page';

describe('ViewGruntRequestRefundPage', () => {
  let component: ViewGruntRequestRefundPage;
  let fixture: ComponentFixture<ViewGruntRequestRefundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGruntRequestRefundPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGruntRequestRefundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
