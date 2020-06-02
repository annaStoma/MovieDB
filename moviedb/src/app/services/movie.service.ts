import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { links } from '../links';
import { Movie } from '../models';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public movieList: Movie[];
  myMovies: any[] = [];
  public searchedMovieList: any[] = [];
  title: string;
  value: string;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.movieList = [];
  }
  getQueryMovie(query: string): Observable<Movie> {
    const url = `https://api.themoviedb.org/3${query}&api_key=${links.apikey + links.params}`;
    return this.httpClient.get<Movie>(url);
  }

  getPopularMovies() {
    this.getQueryMovie(links.popular)
      .subscribe((data: any) => {
        this.movieList = Object.assign(this.movieList, data.results, this.myMovies);
        localStorage.setItem('films', JSON.stringify(this.movieList));
      }
        , error => { this.router.navigate(['/error']) }
      );
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
    const movieList = JSON.parse(localStorage.getItem('films'));
    movieList.push(movie);
    this.movieList = movieList;
  }
}

