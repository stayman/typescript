import * as React from 'react';
import CSSModules from 'react-css-modules';
import {MovieAttrs} from 'components/Movie';
const importStyles = require('./styles.css');

export interface MovieContainerState {
  results: Array<MovieAttrs>;
}

class Movies extends React.Component<undefined, MovieContainerState> {

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
      body = <h1>Search for a Movie to get started</h1>;
    }

    return (
      <div styleName="root">
        {body}
      </div>
    )
  }

}

export const MovieContainer = CSSModules(Movies, importStyles)
