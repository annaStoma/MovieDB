import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { links } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class MovieService {
  value: string;

  myMovies: any[] = [];

  constructor(private httpClient: HttpClient) { }
  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${links.apikey + links.params}`;
    return this.httpClient.get(url);
  }

  getPopularMovies() {
    return this.getQuery(links.popular).pipe(map((data: any) => data.results));
  }

  addNewMovie(movie) {
    this.myMovies.push(movie);
  }

  getQuery2(query: string) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${links.apikey + links.searchParams}
    &query=${query}&page=1&include_adult=false`;
    return this.httpClient.get(url);
  }

  search(value: string) {
    return this.getQuery2(value).pipe(map((data: any) => data.results));
  }

}

