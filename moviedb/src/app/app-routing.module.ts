import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { TvShowsListComponent } from './components/tv-shows-list/tv-shows-list.component';
import { TvInfoComponent } from './components/tv-info/tv-info.component';
import { LibraryComponent } from './components/library/library.component';
import { SupportComponent } from './components/support/support.component';
import { AboutComponent } from './components/about/about.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { ErrorComponent } from './components/error/error.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [ { path: 'movies', component: MovieListComponent },
{ path: 'movies/:id', component: MovieInfoComponent },
{ path: 'tv', component: TvShowsListComponent },
{ path: 'tv/:id', component: TvInfoComponent },
{ path: 'library', component: LibraryComponent },
{ path: 'support', component: SupportComponent },
{ path: 'about', component: AboutComponent },
{ path: 'add', component: AddMovieComponent },
{ path: 'error', component: ErrorComponent },
{ path: 'movies/search/:query', component: SearchResultsComponent },
{ path: 'tv/search/:query', component: SearchResultsComponent },
{ path: '**', redirectTo:"/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
