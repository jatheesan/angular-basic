import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templetedriven1Component } from './templetedriven1.component';

describe('Templetedriven1Component', () => {
  let component: Templetedriven1Component;
  let fixture: ComponentFixture<Templetedriven1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Templetedriven1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Templetedriven1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
