import { useRef } from 'react';

import { useActions } from '../hooks/use-actions';
import SearchResults from './SearchResults';

const SearchInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { search } = useActions();
  const changeInput = () => {
    const input: string = inputRef.current?.value || '';
    search(input);
  };
  return (
    <div className="columns is-flex-direction-row is-justify-content-center search">
      <div className="column is-one-quarter">
        <input
          ref={inputRef}
          className="input"
          onChange={changeInput}
          id="search"
          type="text"
        />
        <SearchResults />
      </div>
    </div>
  );
};

export default SearchInput;
