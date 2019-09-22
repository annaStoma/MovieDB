import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-info',
  templateUrl: './tv-info.component.html',
  styleUrls: ['./tv-info.component.scss']
})
export class TvInfoComponent implements OnInit {

  @Input() id: string;
  isAddToLibrary: Boolean = true;
  public tv: {} = {};
  public thisTv: {};
  valueButton: string;
  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id'];
  }
// !!!!!!! добавить все строчки в переменные
  ngOnInit(): void {
    this.tv = JSON.parse(sessionStorage.getItem(this.id));
    this.valueButton = "add this tv to library";
    this.buttonState();
  }

  addToLibrary() {
    this.isAddToLibrary = !this.isAddToLibrary;
    if (!this.isAddToLibrary) {
      this.valueButton = 'remove this tv from library';
      localStorage.setItem(this.id, JSON.stringify(this.tv));
    }
    else {
      this.valueButton = 'remove this tv from library';
    }
  }

  buttonState() {
    for (let i = 0; i <= localStorage.length - 1; i++) {
      this.thisTv = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (localStorage.getItem(this.id) == JSON.stringify(this.thisTv)) {
        this.valueButton = 'remove this tv from library';
      }
    }
  }
  
}
