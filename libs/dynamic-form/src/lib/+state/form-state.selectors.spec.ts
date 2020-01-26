import { Entity, FormStateState } from './form-state.reducer';
import { formStateQuery } from './form-state.selectors';

describe('FormState Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getFormStateId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createFormState = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      formState: {
        list: [
          createFormState('PRODUCT-AAA'),
          createFormState('PRODUCT-BBB'),
          createFormState('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('FormState Selectors', () => {
    it('getAllFormState() should return the list of FormState', () => {
      const results = formStateQuery.getAllFormState(storeState);
      const selId = getFormStateId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedFormState() should return the selected Entity', () => {
      const result = formStateQuery.getSelectedFormState(storeState);
      const selId = getFormStateId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = formStateQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = formStateQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
