import { TestBed } from '@angular/core/testing';

import { SesionGuard } from './sesion.guard';

describe('SesionGuard', () => {
  let guard: SesionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SesionGuard);
  });

  it('El componente SesionGuard se ha creado de forma correcta', () => {
    expect(guard).toBeTruthy();
  });
});