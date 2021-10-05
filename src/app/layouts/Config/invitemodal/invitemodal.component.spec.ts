/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InvitemodalComponent } from './invitemodal.component';

describe('InvitemodalComponent', () => {
  let component: InvitemodalComponent;
  let fixture: ComponentFixture<InvitemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
