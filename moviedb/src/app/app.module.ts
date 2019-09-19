import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { TvService } from './services/tv.service';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './components/library/library.component';
import { SupportComponent } from './components/support/support.component';
import { TvShowsListComponent } from './components/tv-shows-list/tv-shows-list.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { SearchComponent } from './components/search/search.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { AboutComponent } from './components/about/about.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { TvCardComponent } from './components/tv-card/tv-card.component';
import { TvInfoComponent } from './components/tv-info/tv-info.component';

export const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieInfoComponent },
  { path: 'tv', component: TvShowsListComponent },
  { path: 'tv/:id', component: TvInfoComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'support', component: SupportComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MovieListComponent,
    LibraryComponent,
    SupportComponent,
    TvShowsListComponent,
    TopOfPageComponent,
    SearchComponent,
    AddMovieComponent,
    AboutComponent,
    MovieInfoComponent,
    MovieCardComponent,
    TvCardComponent,
    TvInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [MovieService, TvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
