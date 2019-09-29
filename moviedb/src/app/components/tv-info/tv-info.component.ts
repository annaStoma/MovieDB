import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tv } from 'src/app/models';

@Component({
  selector: 'app-tv-info',
  templateUrl: './tv-info.component.html',
  styleUrls: ['./tv-info.component.scss']
})
export class TvInfoComponent implements OnInit {
  
  @Input() id: string;
  isAddToLibrary: Boolean = true;
  public tv: {} = {}; // try to rethink this solution
  public thisTv: Tv;
  valueButton: string =  "add this movie to library";
  isAdded: boolean = false;

  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.tv = JSON.parse(sessionStorage.getItem(this.id));
    this.buttonState();
  }

  addToLibrary() {   
    localStorage.setItem(this.id, JSON.stringify(this.tv));
  }

  removeFromLibrary() {
    for (let i = 0; i <= localStorage.length - 1; i++) {
      this.thisTv = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (localStorage.getItem(this.id) == JSON.stringify(this.thisTv)) {
        localStorage.removeItem(this.id);
      }
    }
  }

  buttonState() {
    for (let i = 0; i <= localStorage.length - 1; i++) {
      this.thisTv = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (localStorage.getItem(this.id) == JSON.stringify(this.thisTv)) {
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
