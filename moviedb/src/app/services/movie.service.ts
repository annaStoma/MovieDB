import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { links } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class MovieService {
  value: string;
  public movieList: any[];

  myMovies: any[] = [];

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

  addNewMovie(movie) {
    this.myMovies.push(movie);
  }

  getQuerySearch(query: string) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${links.apikey + links.searchParams}
    &query=${query}&page=1&include_adult=false`;
    return this.httpClient.get(url);
  }

  search(value: string) {
    this.getQuerySearch(value)
      .subscribe((data: any) => {
        this.movieList = data.results;
        console.log(this.movieList);
      });
  }
}

