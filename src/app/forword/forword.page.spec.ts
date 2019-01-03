import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwordPage } from './forword.page';

describe('ForwordPage', () => {
  let component: ForwordPage;
  let fixture: ComponentFixture<ForwordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
