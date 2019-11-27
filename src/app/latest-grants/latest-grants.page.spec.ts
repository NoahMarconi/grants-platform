import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestGrantsPage } from './latest-grants.page';

describe('LatestGrantsPage', () => {
  let component: LatestGrantsPage;
  let fixture: ComponentFixture<LatestGrantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestGrantsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestGrantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
