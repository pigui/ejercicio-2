import { MarkerTypes } from '../action-types';
import { MarkerSelected } from '../reducers/markerReducer';
import { SearchTypes } from '../action-types/index';
import { Dispatch } from 'redux';
import { Action } from '../actions';

export const addMap = (payload: google.maps.Map<any>) => {
  return {
    type: MarkerTypes.ADD_MAP,
    payload,
  };
};
export const addMarker = (payload: MarkerSelected) => {
  return {
    type: MarkerTypes.ADD_MARKER,
    payload,
  };
};

export const removeMarker = (payload: string) => {
  return {
    type: MarkerTypes.DELETE_MARKER,
    payload,
  };
};

export const search = (input: string) => {
  return (dispatch: Dispatch<Action>) => {
    const autoComplete = new google.maps.places.AutocompleteService();
    autoComplete.getPlacePredictions(
      { input },
      (
        results: google.maps.places.AutocompletePrediction[],
        status: google.maps.places.PlacesServiceStatus
      ) => {
        return dispatch({
          type: SearchTypes.SEARCH,
          payload: { results, search: input },
        });
      }
    );
    return dispatch({
      type: SearchTypes.SEARCH,
      payload: { results: [], search: input },
    });
  };
};
