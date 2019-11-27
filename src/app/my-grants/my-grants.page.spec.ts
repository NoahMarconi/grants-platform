import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGrantsPage } from './my-grants.page';

describe('MyGrantsPage', () => {
  let component: MyGrantsPage;
  let fixture: ComponentFixture<MyGrantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGrantsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGrantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
