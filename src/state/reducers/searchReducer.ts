import { SearchTypes } from '../action-types/index';
import { Action } from '../actions';
interface SearchState {
  search: string | null;
  results: google.maps.places.AutocompletePrediction[];
}

const initialState: SearchState = {
  search: null,
  results: [],
};

const reducer = (state = initialState, action: Action): SearchState => {
  switch (action.type) {
    case SearchTypes.SEARCH:
      return {
        ...state,
        search: action.payload.search,
        results: action.payload.results,
      };
    default:
      return state;
  }
};

export default reducer;
