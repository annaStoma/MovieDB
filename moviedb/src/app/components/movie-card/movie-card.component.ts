import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {
  
  @Input() public movie: any[] = [];
  // public thisMovie: {};
  // @Input() id: string;

  constructor() { }
  ngOnInit(): void {
    // this.buttonState();

    // console.log(this.id);
  }

  // buttonState() {
  //   for (let i = 0; i <= localStorage.length - 1; i++) {
  //     this.thisMovie = JSON.parse(localStorage.getItem(localStorage.key(i)));
  //     // console.log(this.thisMovie);
  //     // console.log(JSON.parse(localStorage.getItem(this.id)));
  //     if (localStorage.getItem(this.id) == JSON.stringify(this.thisMovie)) {
  //       // event.target.value = "remove this movie from library";
  //       alert("hello");
  //     }
  //   }

  }

