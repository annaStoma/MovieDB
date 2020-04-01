export interface NewTv {
  id?: number;
  name?: string;
  overview?: string;
  poster_path?: string;
  first_air_date?: string;
  vote_average?: number;
}

export interface Tv {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;

  backdrop_path: string;
  genre_ids: Array<number>;
  origin_country: Array<string>;
  original_language: string;
  original_name?: string;
  popularity: number;
  vote_count: number;
}