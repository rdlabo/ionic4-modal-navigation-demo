import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardPage } from './forward.page';

describe('ForwardPage', () => {
  let component: ForwardPage;
  let fixture: ComponentFixture<ForwardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
