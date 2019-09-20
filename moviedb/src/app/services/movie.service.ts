import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { links } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }
  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${links.apikey + links.params}`;
    return this.httpClient.jsonp(url, "");
  }

  getPopularMovies() {
    return this.getQuery(links.popular).pipe(map((data: any) => data.results));
  }

}

