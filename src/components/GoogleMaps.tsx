import { Loader } from '@googlemaps/js-api-loader';
import { useActions } from '../hooks/use-actions';
import ResultList from './ResultList';
import SearchInput from './SearchInput';

const GoogleMaps: React.FC = () => {
  const { addMap } = useActions();
  const loader = new Loader({
    apiKey: process.env.REACT_APP_GOOGLE_KEY || '',
    version: 'weekly',
    libraries: ['places'],
  });

  const mapOptions: google.maps.MapOptions = {
    center: {
      lat: 41.3333,
      lng: 2.1,
    },
    zoom: 15,
  };
  loader.load().then(() => {
    const mapElement = document.getElementById('map');
    const map: google.maps.Map<any> = new google.maps.Map(
      mapElement as any,
      mapOptions
    );
    addMap(map);
    const marker = new google.maps.Marker({
      map,
      place: {
        placeId: 'ChIJVXealLU_xkcRja_At0z9AGY',
      },
    });
    marker.getMap();
  });

  return (
    <div>
      <SearchInput />
      <div className="columns">
        <div className="column" id="map"></div>
      </div>
      <ResultList />
    </div>
  );
};

export default GoogleMaps;
