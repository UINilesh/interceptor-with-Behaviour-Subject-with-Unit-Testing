import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Demo3Component } from './demo3.component';

describe('Demo3Component', () => {
  let component: Demo3Component;
  let fixture: ComponentFixture<Demo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Demo3Component],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
