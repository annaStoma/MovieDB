import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { headers } from '../services/status';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent{
newMovies: any[] = [];
loading: boolean;

  constructor(private moviebd: MovieService) { 
    this.loading = true;
    this.moviebd.getMovies().subscribe( (data: any) => {
      console.log(data);
      this.newMovies = data;
      this.loading = false;
    });
 
  }

}
