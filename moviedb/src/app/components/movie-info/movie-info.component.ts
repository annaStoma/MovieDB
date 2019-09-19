import { Component, OnInit, Input } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { ActivatedRoute } from '@angular/router';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  @Input() id: string;
  @Input() public currentMovie: any[];
  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
    // this.activateRoute.queryParams.subscribe(params => {
    //   this.movie = JSON.parse(params["movie"]);
    // });
    // console.log(this.id);
    // console.log(this.movie);
    console.log(this.currentMovie);
  }

  ngOnInit() {
  }

}