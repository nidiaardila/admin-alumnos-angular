import { reducer, initialState } from 'src/app/state/alumno-state.reducer';

describe('AlumnoState Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});