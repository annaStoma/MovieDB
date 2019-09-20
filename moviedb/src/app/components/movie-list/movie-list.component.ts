import { Component, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  movieList: any[] = [];
  loading: boolean = true;
  constructor(private moviebd: MovieService, private router: Router) {
  }
  ngOnInit() {
    this.loadPopularMovies();
  }
  public loadPopularMovies() {
    this.loading = true;
    this.moviebd.getPopularMovies().subscribe((data: any) => {
      this.movieList = data;
      this.loading = false;
      console.log(this.movieList);
    });
  }

  getMovieInfo(id: string) {
    this.router.navigate(['/movies', id]);
    for (const index in this.movieList) {
      if (this.movieList[index].id === id)
      localStorage.setItem(this.movieList[index].id, JSON.stringify(this.movieList[index]))
    }
  }

}
