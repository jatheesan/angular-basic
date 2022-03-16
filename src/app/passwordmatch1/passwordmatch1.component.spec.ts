import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Passwordmatch1Component } from './passwordmatch1.component';

describe('Passwordmatch1Component', () => {
  let component: Passwordmatch1Component;
  let fixture: ComponentFixture<Passwordmatch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Passwordmatch1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Passwordmatch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
