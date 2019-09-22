import { Component, OnInit, Input } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component'
import { Router } from '@angular/router';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  public movie: {};
  moviesFromLocalStorage: any[] = [];
  isLSEmpty: Boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("local storage");
    this.getAllFromLocalStorage();
  }


  getAllFromLocalStorage() {
    if (localStorage.length == 0) {
      this.isLSEmpty = false;
    }
    else {
      for (var i = 0; i <= localStorage.length - 1; i++) {
        this.movie = JSON.parse(localStorage.getItem(localStorage.key(i)));
        this.moviesFromLocalStorage.push(this.movie);
      }
      // console.log(this.moviesFromLocalStorage);
    }
  }

  getMovieInfo(id: string) {
    this.router.navigate(['/movies', id]);
    for (const index in this.moviesFromLocalStorage) {
      if (this.moviesFromLocalStorage[index].id === id)
      sessionStorage.setItem(this.moviesFromLocalStorage[index].id, JSON.stringify(this.moviesFromLocalStorage[index]));
    }
  }
}
