import { useTypedSelector } from '../hooks/use-typed-selector';
import SearchResultItem from './SearchResultsItem';

const SearchResults: React.FC = () => {
  const { results } = useTypedSelector((state) => state.search);

  const items = results.map(
    (result: google.maps.places.AutocompletePrediction, idx: number) => (
      <SearchResultItem key={idx} result={result} />
    )
  );
  return <div className="search-box">{items}</div>;
};

export default SearchResults;
