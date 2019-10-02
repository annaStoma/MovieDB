import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
import * as randId from 'uuid/v4';
import { Movie, NewMovie } from 'src/app/models';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  public movie: FormGroup;
  movieObj: Object = {};
  submitted = false;


  constructor(private fb: FormBuilder, private moviebd: MovieService) { }

  ngOnInit() {
    this.movie = this.fb.group({
      id: randId(),
      original_title: ['', Validators.required],
      overview: ['', [Validators.required, Validators.maxLength(10)]],
      poster_path: ['', Validators.required],
      release_date: ['', Validators.required],
      vote_average: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      isAddedByUser: true
    });
  }
  get f() {
     return this.movie.controls;
     }

  onSubmit() {
    this.submitted = true;
    if (this.movie.invalid) {
    return;
    }
    else {
      this.movieObj = this.movie.getRawValue();
      const id = this.movie.getRawValue().id;
      this.moviebd.addNewMovie(this.movieObj);
      alert('SUCCESS!! :-)')
    }
  }
}
