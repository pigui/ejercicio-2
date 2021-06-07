import { useTypedSelector } from '../hooks/use-typed-selector';
import ResultListItem from './ResultListItem';
const ResultList: React.FC = () => {
  const markers: google.maps.Marker[] = useTypedSelector(
    (state) => state.marker.data
  );

  return (
    <div>
      {markers && markers.length > 0
        ? markers.map((marker) => (
            <ResultListItem
              title={marker.getTitle()}
              key={(marker as any).id}
            />
          ))
        : 'no results'}
    </div>
  );
};

export default ResultList;
