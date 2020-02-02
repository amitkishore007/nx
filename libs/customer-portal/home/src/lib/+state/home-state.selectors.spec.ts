import { Entity, HomeStateState } from './home-state.reducer';
import { homeStateQuery } from './home-state.selectors';

describe('HomeState Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getHomeStateId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createHomeState = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      homeState: {
        list: [
          createHomeState('PRODUCT-AAA'),
          createHomeState('PRODUCT-BBB'),
          createHomeState('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('HomeState Selectors', () => {
    it('getAllHomeState() should return the list of HomeState', () => {
      const results = homeStateQuery.getAllHomeState(storeState);
      const selId = getHomeStateId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedHomeState() should return the selected Entity', () => {
      const result = homeStateQuery.getSelectedHomeState(storeState);
      const selId = getHomeStateId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = homeStateQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = homeStateQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
