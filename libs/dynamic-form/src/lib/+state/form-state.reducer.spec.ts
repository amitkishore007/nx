import { FormStateLoaded } from './form-state.actions';
import {
  FormStateState,
  Entity,
  initialState,
  reducer
} from './form-state.reducer';

describe('FormState Reducer', () => {
  const getFormStateId = it => it['id'];
  let createFormState;

  beforeEach(() => {
    createFormState = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid FormState actions ', () => {
    it('should return set the list of known FormState', () => {
      const formStates = [
        createFormState('PRODUCT-AAA'),
        createFormState('PRODUCT-zzz')
      ];
      const action = new FormStateLoaded(formStates);
      const result: FormStateState = reducer(initialState, action);
      const selId: string = getFormStateId(result.list[1]);

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
