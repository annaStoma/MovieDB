import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { TvService } from 'src/app/services/tv.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public query: string;
  public searchedMovie = [];
  results: boolean = true;
  constructor(private activateRoute: ActivatedRoute,
    private router: Router,
    private moviedb: MovieService,
    private tvdb: TvService) {
    this.query = activateRoute.snapshot.params['query'];
  }

  ngOnInit() {
    this.getCurrUrl();
  }

  getCurrUrl(){
    if (this.router.url == `/movies/search/${this.query}`){
      this.moviedb.search(this.query);
      this.searchedMovie = this.moviedb.searchedMovieList;
    }
    else if(this.router.url ==  `/tv/search/${this.query}`){
      this.tvdb.search(this.query);
      this.searchedMovie = this.tvdb.searchedTvList;
    }
  }

}
