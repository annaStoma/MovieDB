export interface NewMovie{
  getRawValue(): Object; // use it
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: Date;
  vote_average: number;
  isAddedByUser: boolean;
 }

 export interface Movie{
 adult: boolean;
 backdrop_path: string;
 genre_ids: Array<number>;
 id: number;
 original_language: string;
 original_title: string;
 overview: string;
 popularity: number;
 poster_path: string;
 release_date: string;
 title: string;
 video: boolean;
 vote_average: number;
 vote_count: number;
}