import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [MovieService]
})
export class SearchComponent implements OnInit {

  searchValue: string = '';

  constructor(private moviebd: MovieService) {
  }

  ngOnInit() {
  }

  searchMovie() {
    this.moviebd.search(this.searchValue);
  }

}
