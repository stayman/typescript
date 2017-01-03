import React from 'react';
import CSSModules from 'react-css-modules';
const importStyles = require('./styles.css');

export interface MovieAttrs {
  Title: string;
  Year: number;
  imdbId: string;
  Poster: string;
}

const Movie: React.StatelessComponent<MovieAttrs> = ({Title, Year, Poster}) => {
  return (
    <div styleName="root">
      <h2 styleName="title">{Title}</h2>
      <p>{Year}</p>
      <img src={Poster} />
    </div>
  )
}

export default CSSModules(Movie, importStyles);
