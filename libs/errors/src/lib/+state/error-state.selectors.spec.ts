import { Entity, ErrorStateState } from './error-state.reducer';
import { errorStateQuery } from './error-state.selectors';

describe('ErrorState Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getErrorStateId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createErrorState = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      errorState: {
        list: [
          createErrorState('PRODUCT-AAA'),
          createErrorState('PRODUCT-BBB'),
          createErrorState('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('ErrorState Selectors', () => {
    it('getAllErrorState() should return the list of ErrorState', () => {
      const results = errorStateQuery.getAllErrorState(storeState);
      const selId = getErrorStateId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedErrorState() should return the selected Entity', () => {
      const result = errorStateQuery.getSelectedErrorState(storeState);
      const selId = getErrorStateId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = errorStateQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = errorStateQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
