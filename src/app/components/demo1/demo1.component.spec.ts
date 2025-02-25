import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Demo1Component } from './demo1.component';

describe('Demo1Component', () => {
  let component: Demo1Component;
  let fixture: ComponentFixture<Demo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo1Component ],
      imports:[ ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
