import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Probando10Component } from './probando10.component';

describe('Probando10Component', () => {
  let component: Probando10Component;
  let fixture: ComponentFixture<Probando10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Probando10Component]
    });
    fixture = TestBed.createComponent(Probando10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
