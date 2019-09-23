import { Component, OnInit, Input } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../../models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {


  movie: FormGroup;
  movieObj: Object = {};
  constructor(private fb: FormBuilder, private moviebd: MovieService) { }


  getRandomIntInclusive() {
    return Math.floor(Math.random() * (900000 - 100000 + 1)) + 100000;
  }

  ngOnInit() {
    this.movie = this.fb.group({
      id: this.getRandomIntInclusive(),
      original_title: '',
      overview: '',
      poster_path: '',
      release_date: '',
      vote_average: ''
    });
  }

  onSubmit() {
    this.movieObj = this.movie.getRawValue();
    const id = this.movie.getRawValue().id;
    sessionStorage.setItem(id, JSON.stringify(this.movieObj));
    this.moviebd.addNewMovie(this.movieObj);
    console.log(this.movie);
  }
}
