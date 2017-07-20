/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TcsComponent } from './tcs.component';

describe('TcsComponent', () => {
  let component: TcsComponent;
  let fixture: ComponentFixture<TcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
