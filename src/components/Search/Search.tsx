import React from 'react';
import CSSModules from 'react-css-modules';
const importStyles = require('./styles.css');

export interface SearchProps {
  onSearch: () => void;
  wait?: number;
  value?: string;
}

const SearchBox: React.StatelessComponent<SearchProps> = ({onSearch, value = ''}) => {

  return (
      <input
        type="text"
        defaultValue={value}
        placeholder="Search for a movie here"
        onChange={onSearch}
        styleName="root"
      />
  );
}

export default CSSModules(SearchBox, importStyles);
