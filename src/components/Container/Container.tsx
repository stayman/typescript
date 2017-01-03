import React from 'react';
import CSSModules from 'react-css-modules';
import SearchBox from 'components/Search/Search';
import {MovieAttrs} from 'components/Movie';
import search from 'services/search';
const importStyles = require('./styles.css');

export interface MovieContainerState {
  results: Array<MovieAttrs>;
  searchValue?: string;
}

function onSearch(e: React.FormEvent<HTMLInputElement>): void {
  e.preventDefault();
  const value: string = e.currentTarget.value;
  search(value)
    .then((results) => {
      this.setState({
        results,
        searchValue: value
      });
    })
}

class Movies extends React.Component<{}, MovieContainerState> {

  constructor() {
    super();
    this.state = {
      results: []
    }
  }

  render() {
    const {results} = this.state;
    let body: JSX.Element;

    if (results.length) {
      body = <div />;
    } else {
      body = <h2 styleName="empty">Search for a Movie to get started</h2>;
    }

    return (
      <div styleName="root">
        <h1 styleName="header">Welcome to the Movie Search Tool</h1>
        <SearchBox onSearch={onSearch.bind(this)}/>
        {body}
      </div>
    )
  }

}

export const MovieContainer = CSSModules(Movies, importStyles)
