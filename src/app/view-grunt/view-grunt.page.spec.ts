import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGruntPage } from './view-grunt.page';

describe('ViewGruntPage', () => {
  let component: ViewGruntPage;
  let fixture: ComponentFixture<ViewGruntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGruntPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGruntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
