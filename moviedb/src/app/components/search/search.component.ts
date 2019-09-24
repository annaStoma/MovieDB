import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [MovieService]
})
export class SearchComponent implements OnInit {

  @Input() movieList: any[];
  movieList2: any[];
  searchValue: string;

  constructor(private moviebd: MovieService) {
    // console.log(this.movieList);
   }

  ngOnInit() {
  }

  searchMovie() {
    console.log(this.searchValue);
    this.moviebd.search(this.searchValue).subscribe((data: any) => {
      this.movieList = data;
      this.movieList2 =  this.movieList;
      console.log(this.movieList);
    });

  }
  
}
