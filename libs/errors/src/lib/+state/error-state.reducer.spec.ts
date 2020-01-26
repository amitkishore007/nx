import { ErrorStateLoaded } from './error-state.actions';
import {
  ErrorStateState,
  Entity,
  initialState,
  reducer
} from './error-state.reducer';

describe('ErrorState Reducer', () => {
  const getErrorStateId = it => it['id'];
  let createErrorState;

  beforeEach(() => {
    createErrorState = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid ErrorState actions ', () => {
    it('should return set the list of known ErrorState', () => {
      const errorStates = [
        createErrorState('PRODUCT-AAA'),
        createErrorState('PRODUCT-zzz')
      ];
      const action = new ErrorStateLoaded(errorStates);
      const result: ErrorStateState = reducer(initialState, action);
      const selId: string = getErrorStateId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
