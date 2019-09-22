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
  isAddToLibrary: Boolean = true;
  public movie: {} = {};
  public thisMovie: {};
  valueButton: string;
  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }
// !!!!!!! добавить все строчки в переменные
  ngOnInit(): void {
    this.movie = JSON.parse(sessionStorage.getItem(this.id));
    this.valueButton = "add this movie to library";
    this.buttonState();
  }

  addToLibrary(event) {
    this.isAddToLibrary = !this.isAddToLibrary;
    if (!this.isAddToLibrary) {
      event.target.value = "remove this movie from library";
      localStorage.setItem(this.id, JSON.stringify(this.movie));
    }
    else {
      event.target.value = "add this movie to library";
    }
  }

  buttonState() {
    for (let i = 0; i <= localStorage.length - 1; i++) {
      this.thisMovie = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (localStorage.getItem(this.id) == JSON.stringify(this.thisMovie)) {
        this.valueButton = 'remove this movie from library';
      }
    }
  }
}
