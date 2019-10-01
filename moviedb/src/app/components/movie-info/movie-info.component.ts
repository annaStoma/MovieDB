import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  @Input() id: string;
  public movie: Movie;
  public thisMovie: {};
  valueButtonAdd : string = "add this movie to library";
  valueButtonRemove : string = "remove this movie from library";
  valueButton: string =  this.valueButtonAdd;

  isAdded: boolean  = false;

  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.movie = JSON.parse(sessionStorage.getItem(this.id));
    this.buttonState();
  }

  addToLibrary() {
    localStorage.setItem(this.id, JSON.stringify(this.movie));
  }

  removeFromLibrary() {
    for (let i = 0; i <= localStorage.length - 1; i++) {
      this.thisMovie = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (localStorage.getItem(this.id) == JSON.stringify(this.thisMovie)) {
        localStorage.removeItem(this.id);
      }
    }
  }

  buttonState() {
    for (let i = 0; i <= localStorage.length - 1; i++) {
      this.thisMovie = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (localStorage.getItem(this.id) == JSON.stringify(this.thisMovie)) {
        this.valueButton = this.valueButtonRemove;
      }
    }
  }

  choose() {
    if (this.isAdded) {
      this.removeFromLibrary();
      this.valueButton = this.valueButtonAdd;
      this.isAdded = !this.isAdded;
    }
    else if (!this.isAdded) {
      this.addToLibrary();
        this.valueButton = this.valueButtonRemove;
        this.isAdded = !this.isAdded;
      }
  }
}