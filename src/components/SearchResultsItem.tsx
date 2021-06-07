import { useTypedSelector } from '../hooks/use-typed-selector';
import Highlight from 'react-highlight';
import { useActions } from '../hooks/use-actions';
import { v4 as uuidv4 } from 'uuid';

interface SearchResultItemProps {
  result: google.maps.places.AutocompletePrediction;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({
  result,
}: SearchResultItemProps) => {
  const { addMarker, removeMarker } = useActions();
  const { search } = useTypedSelector((state) => state.search);
  const { map } = useTypedSelector((state) => state.marker);
  const clickItem = () => {
    const placesServices = new google.maps.places.PlacesService(map);
    placesServices.getDetails({ placeId: result.place_id }, (place) => {
      const id: string = uuidv4();
      const marker = new google.maps.Marker({
        position: place.geometry?.location,
        map,
        title: result.description,
      });
      marker.setValues({ id });
      addMarker({ id, marker });

      marker.addListener('click', () => {
        marker.setMap(null);
        removeMarker(id);
      });

      if (place.geometry?.viewport) {
        map.fitBounds(place.geometry?.viewport);
      } else {
        map.setCenter(place.geometry?.location);
      }
    });
  };
  let re = new RegExp(search?.toLowerCase() as string, 'gi');
  let str = result.description
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(re, `<b>${search?.toLowerCase()}</b>`);

  return (
    <div className="is-capitalized search-box-item content" onClick={clickItem}>
      <Highlight innerHTML={true}>{str}</Highlight>
    </div>
  );
};

export default SearchResultItem;
