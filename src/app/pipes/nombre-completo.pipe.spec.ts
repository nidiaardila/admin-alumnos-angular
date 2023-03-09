import { NombreCompletoPipe } from './nombre-completo.pipe';

describe('NombreCompletoPipe', () => {
  it('El componente NombreCompletoPipe se ha creado de forma correcta', () => {
    const pipe = new NombreCompletoPipe();
    expect(pipe).toBeTruthy();
  });
});
