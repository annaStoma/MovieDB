import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {

  @Input() public movie: any[] = [];

  constructor() { }
  ngOnInit(): void { }

}

