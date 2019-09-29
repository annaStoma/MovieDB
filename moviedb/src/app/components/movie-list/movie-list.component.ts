import { Component, Input, Output } from '@angular/core';
import { MovieService } from '../../services/movie.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  public movieList: any[] = [];
  constructor(private moviebd: MovieService, private router: Router) { }

  ngOnInit() {
    this.loadPopularMovies();
  }

  public loadPopularMovies() {
    this.moviebd.getPopularMovies();
    this.movieList = this.moviebd.movieList;
  }

  getMovieInfo(id: string) {
    this.router.navigate(['/movies', id]);
    for (const index in this.movieList) {
      if (this.movieList[index].id === id)
        sessionStorage.setItem(this.movieList[index].id, JSON.stringify(this.movieList[index]));
    }
  }
}