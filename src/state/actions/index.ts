import { MarkerTypes, SearchTypes } from '../action-types/index';
import { MarkerSelected } from '../reducers/markerReducer';

export interface AddMap {
  readonly type: MarkerTypes.ADD_MAP;
  payload: google.maps.Map<any>;
}

export interface AddMarkerAction {
  readonly type: MarkerTypes.ADD_MARKER;
  payload: MarkerSelected;
}

export interface DeleteMarkerAction {
  readonly type: MarkerTypes.DELETE_MARKER;
  payload: string;
}

export interface SearchAction {
  readonly type: SearchTypes.SEARCH;
  payload: {
    search: string;
    results: google.maps.places.AutocompletePrediction[];
  };
}

export type Action =
  | AddMarkerAction
  | DeleteMarkerAction
  | SearchAction
  | AddMap;
