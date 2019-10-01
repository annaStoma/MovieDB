import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
import * as randId from 'uuid/v4';
import { Movie, NewMovie } from 'src/app/models';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movie: FormGroup;
  movieObj: Object = {};

  constructor(private fb: FormBuilder, private moviebd: MovieService) { }

  ngOnInit() {
    this.movie = this.fb.group({
      id: randId(),
      original_title: '',
      overview: '',
      poster_path: '',
      release_date: '',
      vote_average: '',
      isAddedByUser: true
    });
  }

  onSubmit() {
    this.movieObj = this.movie.getRawValue();
    const id = this.movie.getRawValue().id;
    sessionStorage.setItem(id, JSON.stringify(this.movieObj));
    this.moviebd.addNewMovie(this.movieObj);
  }
}
