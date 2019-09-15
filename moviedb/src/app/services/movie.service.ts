import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { headers } from './status';

@Injectable({
  providedIn: "root"
})
export class MovieService {

  private apikey: string = "9db89ef82cb038efcce298941077f78c";

  constructor(private httpClient: HttpClient) { }
  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.httpClient.jsonp(url, "");
  }

  getMovies() {
    return this.getQuery("/discover/movie?sort_by=popularity.desc").pipe(map((data: any) => data.results));
  }
}