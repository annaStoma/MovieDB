import { Component, OnInit, Input } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  @Input() id: string;
 public movie: {} = {};

  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
    // this.activateRoute.queryParams.subscribe(params => {
    //   this.movie = JSON.parse(params["movie"]);
    // });
  }

  ngOnInit(): void {
    this.movie = JSON.parse(localStorage.getItem(this.id));
    // console.log(this.movie);
  }

}
