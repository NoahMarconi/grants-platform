import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingGrantsPage } from './trending-grants.page';

describe('TrendingGrantsPage', () => {
  let component: TrendingGrantsPage;
  let fixture: ComponentFixture<TrendingGrantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingGrantsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingGrantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
