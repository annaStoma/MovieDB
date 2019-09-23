import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  public movie: {};
  moviesFromLocalStorage: any[] = [];
  isLsEmpty: Boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.getAllFromLocalStorage();
  }


  getAllFromLocalStorage() {
    if (localStorage.length == 0) {
      this.isLsEmpty = false;
    }
    else {
      for (var i = 0; i <= localStorage.length - 1; i++) {
        this.movie = JSON.parse(localStorage.getItem(localStorage.key(i)));
        this.moviesFromLocalStorage.push(this.movie);
      }
    }
  }

  getMovieInfo(id: string) {
    let route;
    this.moviesFromLocalStorage.forEach(item => {
      if (item.id === id) {
        route = item.name ? '/tv' : '/movies';
      };
    });
    this.router.navigate([route, id]);
    for (const index in this.moviesFromLocalStorage) {
      if (this.moviesFromLocalStorage[index].id === id)
        sessionStorage.setItem(this.moviesFromLocalStorage[index].id, JSON.stringify(this.moviesFromLocalStorage[index]));
    }
  }

}
