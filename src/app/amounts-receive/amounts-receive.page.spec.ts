import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountsReceivePage } from './amounts-receive.page';

describe('AmountsReceivePage', () => {
  let component: AmountsReceivePage;
  let fixture: ComponentFixture<AmountsReceivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountsReceivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountsReceivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
