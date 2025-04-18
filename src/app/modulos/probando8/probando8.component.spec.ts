import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Probando8Component } from './probando8.component';

describe('Probando8Component', () => {
  let component: Probando8Component;
  let fixture: ComponentFixture<Probando8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Probando8Component]
    });
    fixture = TestBed.createComponent(Probando8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
