import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tv } from 'src/app/models';

@Component({
  selector: 'app-tv-info',
  templateUrl: './tv-info.component.html',
  styleUrls: ['./tv-info.component.scss']
})
export class TvInfoComponent implements OnInit {
  
  @Input() public id: number;
  public tv: Tv;
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
    this.getTv();
    this.buttonState();
  }

  addToLibrary() {
    this.library = JSON.parse(localStorage.getItem('library'));
    this.library.push(this.tv);
    localStorage.setItem('library', JSON.stringify(this.library));
  }

  getTv() {
    const tv = JSON.parse(localStorage.getItem('tv'));
    tv.forEach(tv => {
      if (tv.id == this.id) {
        this.tv = tv;
         console.log(this.tv)
      }
    });
   
  }

  removeFromLibrary() {
    const library = JSON.parse(localStorage.getItem('library'));
    library.forEach((tv, index) => {
      if (tv.id == this.id) {
        this.chanchedLibrary = JSON.parse(localStorage.getItem('library'));
        const removedItem = this.chanchedLibrary.splice(index, 1);
        localStorage.setItem('library', JSON.stringify(this.chanchedLibrary));
      }
    });
  }

  buttonState() {
    const library = JSON.parse(localStorage.getItem('library'));
    library.forEach(tv => {
      if (tv.id == this.id) {
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