import { HomeStateLoaded } from './home-state.actions';
import {
  HomeStateState,
  Entity,
  initialState,
  reducer
} from './home-state.reducer';

describe('HomeState Reducer', () => {
  const getHomeStateId = it => it['id'];
  let createHomeState;

  beforeEach(() => {
    createHomeState = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid HomeState actions ', () => {
    it('should return set the list of known HomeState', () => {
      const homeStates = [
        createHomeState('PRODUCT-AAA'),
        createHomeState('PRODUCT-zzz')
      ];
      const action = new HomeStateLoaded(homeStates);
      const result: HomeStateState = reducer(initialState, action);
      const selId: string = getHomeStateId(result.list[1]);

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
