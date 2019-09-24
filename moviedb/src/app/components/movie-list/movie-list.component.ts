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
  searchValue: string;
  constructor(private moviebd: MovieService, private router: Router) { }

  ngOnInit() {
    this.loadPopularMovies();
  }


  public loadPopularMovies() {
    try {
      this.moviebd.getPopularMovies().subscribe((data: any) => {
        this.movieList = Object.assign(this.movieList, data, this.moviebd.myMovies);
      });
    }
    catch{
      this.router.navigate(['/error']);
    }
  }

  getMovieInfo(id: string) {
    this.router.navigate(['/movies', id]);
    for (const index in this.movieList) {
      if (this.movieList[index].id === id)
        sessionStorage.setItem(this.movieList[index].id, JSON.stringify(this.movieList[index]));
    }
  }

}
