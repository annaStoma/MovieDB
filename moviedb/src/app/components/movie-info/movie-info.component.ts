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
  valueButtonAdd: string = "add this movie to library";
  valueButtonRemove: string = "remove this movie from library";
  valueButton: string = this.valueButtonAdd;
  isAdded: boolean = false;
  library: any[] = [];
  chanchedLibrary: any[] = [];

  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getMovie();
    this.buttonState();
  }

  addToLibrary() {
    this.library = JSON.parse(localStorage.getItem('library'));
    this.library.push(this.movie);
    localStorage.setItem('library', JSON.stringify(this.library));
  }

  getMovie() {
    const films = JSON.parse(localStorage.getItem('films'));
    films.forEach(film => {
      if (film.id == this.id) {
        this.movie = film;
      }
    });
  }

  removeFromLibrary() {
    const library = JSON.parse(localStorage.getItem('library'));
    library.forEach((film, index) => {
      if (film.id == this.id) {
        this.chanchedLibrary = JSON.parse(localStorage.getItem('library'));
        const removedItem = this.chanchedLibrary.splice(index, 1);
        localStorage.setItem('library', JSON.stringify(this.chanchedLibrary));
      }
    });
  }

  buttonState() {
    const library = JSON.parse(localStorage.getItem('library'));
    library.forEach(film => {
      if (film.id == this.id) {
        this.valueButton = this.valueButtonRemove;
        this.isAdded = true;
      }
    });
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