import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { links } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class TvService {

  constructor(private httpClient: HttpClient) { }
  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${links.apikey + links.params}`;
    return this.httpClient.get(url);
  }

  getTVShows() {
    return this.getQuery(links.tv).pipe(map((data: any) => data.results));
  }
}

