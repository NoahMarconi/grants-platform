import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGruntUnmarkAsCompletePage } from './view-grunt-unmark-as-complete.page';

describe('ViewGruntUnmarkAsCompletePage', () => {
  let component: ViewGruntUnmarkAsCompletePage;
  let fixture: ComponentFixture<ViewGruntUnmarkAsCompletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGruntUnmarkAsCompletePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGruntUnmarkAsCompletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
