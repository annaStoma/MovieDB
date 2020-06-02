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
  public isLsEmpty = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.getAllFromLocalStorage();
  }

  getAllFromLocalStorage() {
    const library = JSON.parse(localStorage.getItem('library'));
    this.moviesFromLocalStorage = library;
    if (this.moviesFromLocalStorage.length === 0) {
      this.isLsEmpty = false;
    }
  }

  getMovieInfo(id: string) {
    let route;
    this.moviesFromLocalStorage.forEach(item => {
      if (item.id === id) {
        route = item.name ? '/tv' : '/movies';
      }
      ;
    });
    this.router.navigate([route, id]);
  }

}
