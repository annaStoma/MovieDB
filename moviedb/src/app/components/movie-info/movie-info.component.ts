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
  // isAddToLibrary: Boolean = true;
  public movie: {} = {};
  public thisMovie: {};
  valueButton: string =  "add this movie to library";
  isAdded: boolean  = false;

  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }
  // !!!!!!! добавить все строчки в переменные
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
        this.valueButton = 'remove this movie from library';
      }
    }
  }

  choose() {
    if (this.isAdded) {
      this.removeFromLibrary();
      this.valueButton = "add this movie to library";
      this.isAdded = !this.isAdded;
    }
    else if (!this.isAdded) {
      this.addToLibrary();
        this.valueButton = 'remove this movie from library';
        this.isAdded = !this.isAdded;
      }
  }
}
