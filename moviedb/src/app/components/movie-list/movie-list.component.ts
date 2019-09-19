import { Component, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  movieList: any[] = [];
  loading: boolean;
  constructor(private moviebd: MovieService) {

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
      return this.movieList;
    });
  }
}
