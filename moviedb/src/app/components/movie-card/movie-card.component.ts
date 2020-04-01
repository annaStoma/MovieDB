import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {

  @Input() public movie: Movie;

  constructor() { }
  ngOnInit(): void { }

}

