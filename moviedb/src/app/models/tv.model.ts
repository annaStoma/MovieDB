export interface NewTv{
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: Date;
  vote_average: number;
 }

 export interface Tv{
  backdrop_path: string;
  first_air_date: string;
  genre_ids: Array<number>;
  id:  number;
  name: string;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview:  string;
  popularity:  number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}