import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
import * as randId from 'uuid/v4';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  public movie: FormGroup;
  public movieObj = {};
  public submitted = false;


  constructor(private fb: FormBuilder,
              private moviebd: MovieService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.movie = this.fb.group({
      id: randId(),
      original_title: ['', Validators.required],
      overview: ['', [Validators.required, Validators.maxLength(10)]],
      poster_path: ['', Validators.required],
      release_date: ['', Validators.required],
      vote_average: ['', [Validators.required, Validators.min(0), Validators.max(10), Validators.pattern("^\\d{1,4}$")]],
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
    } else {
      this.movieObj = this.movie.getRawValue();
      const id = this.movie.getRawValue().id;
      this.moviebd.addNewMovie(this.movieObj);
    }
    this.snackBar.open('Movie successfully uploaded', 'Success', {
      duration: 3000,
    });
    this.router.navigate(['/movies']);
  }
}
