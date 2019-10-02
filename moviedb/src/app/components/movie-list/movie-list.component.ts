import { Component, Input, Output } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models';
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

  routeToMovieInfo(id: string) {
    this.router.navigate(['/movies', id]);
  }
}
