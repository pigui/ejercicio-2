import { Action } from '../actions';
import { MarkerTypes } from '../action-types';

export interface MarkerSelected {
  id: string;
  marker: google.maps.Marker;
}

interface MarkerState {
  data: google.maps.Marker[];
  map: google.maps.Map<any> | any;
}

const initialState: MarkerState = {
  data: [],
  map: null,
};
const reducer = (state = initialState, action: Action): MarkerState => {
  switch (action.type) {
    case MarkerTypes.ADD_MAP:
      return { ...state, map: action.payload };
    case MarkerTypes.ADD_MARKER:
      return { ...state, data: [...state.data, action.payload.marker] };
    case MarkerTypes.DELETE_MARKER:
      const findIdx = state.data.findIndex(
        (d) => (d as any).id === action.payload
      );

      const newData = [...state.data];
      if (!findIdx) {
        newData.shift();
      } else {
        newData.splice(findIdx, 1);
      }
      return {
        ...state,
        data: newData,
      };
    default:
      return state;
  }
};

export default reducer;
