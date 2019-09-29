import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [MovieService]
})
export class SearchComponent implements OnInit {

  searchValue: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchMovie() {
    if (this.router.url === '/movies') {
      this.router.navigate(['/movies/search', this.searchValue]);
    }
    else if (this.router.url === '/tv') {
      this.router.navigate(['/tv/search', this.searchValue]);
    }

    this.searchValue = '';
  }

}
