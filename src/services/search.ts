import axios from 'axios';
import {MovieAttrs} from 'components/Movie/Movie';
import qs from 'qs';

interface OMDBEntry {
  Title: string;
  Year: string;
  imdbId: string;
  Poster: string;
};

interface OMDBResponse {
  Response: 'True' | 'False';
  Error?: string;
  Search?: Array<OMDBEntry>
};

export default function search(keyword: string): Promise<Array<MovieAttrs>> {
  const query = qs.stringify({s: keyword, type: 'movie', tomatoes: true});

  return axios.get(`http://omdbapi.com?${query}`)
    .then((response) => {
      // this feels extremely awkward and hacky
      // there should be way to do this from destructuring above, but I don't see it
      const result: OMDBResponse = response.data as OMDBResponse;
      if (result.Response === 'False' || response.status !== 200) return [];
      return result.Search.filter(({Poster}) => Poster !== 'N/A')
        .map(({Title, Year, imdbId, Poster}: OMDBEntry) => {
          return {
            Title,
            imdbId,
            Poster,
            Year: Number(Year)
          };
        });
    });
}
