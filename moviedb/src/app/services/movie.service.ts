import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { links } from '../links';

@Injectable({
  providedIn: "root"
})
export class MovieService {

  public movieList: any[];
  myMovies: any[] = [];
  public searchedMovieList: any[] = [];
  title: string;
  value: string;

  constructor(private httpClient: HttpClient) {
    this.movieList = [];
  }
  getQueryMovie(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${links.apikey + links.params}`;
    return this.httpClient.get(url);
  }

  getPopularMovies() {
    this.getQueryMovie(links.popular)
      .subscribe((data: any) => {
        this.movieList = Object.assign(this.movieList, data.results, this.myMovies);
      });
  }

  search(value: string) {
    this.searchedMovieList = [];
    this.getQueryMovie(links.popular)
      .subscribe((data: any) => {
        this.movieList = data.results;
        this.movieList.forEach((movie) => {
          const customRegExp = new RegExp(value, 'gi');
          if (movie.original_title.match(customRegExp)) {
            this.searchedMovieList.push(movie);
          }
        });
      });
    return this.searchedMovieList;
  }

  addNewMovie(movie) {
    this.myMovies.push(movie);
  }
}

