import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { links } from '../links';
import { Tv } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class TvService {

  public tvList: Tv[];
  myMovies: any[] = [];
  public searchedTvList: any[] = [];
  title: string;
  value: string;

  constructor(private httpClient: HttpClient ) { 
    this.tvList = [];
  }


  getQueryTv(query: string): Observable<Tv> {
    const url = `https://api.themoviedb.org/3${query}&api_key=${links.apikey + links.params}`;
    return this.httpClient.get<Tv>(url);
  }

  getTVShows() {
    this.getQueryTv(links.tv)
    .subscribe((data: any) => {
      this.tvList = Object.assign(this.tvList, data.results, this.myMovies);
    });
  }

  search(value: string) {
    this.searchedTvList = [];
    this.getQueryTv(links.tv)
      .subscribe((data: any) => {
        this.tvList = data.results;
        this.tvList.forEach((tv: Tv) => {
          const customRegExp = new RegExp(value, 'gi');
          if (tv.name.match(customRegExp)) {
            this.searchedTvList.push(tv);
          }
        });
      });

    return this.searchedTvList;
  }


}

