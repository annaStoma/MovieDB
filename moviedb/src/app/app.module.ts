import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './sidenav/sidenav.component';
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
import { LibraryComponent } from './components/library/library.component';
import { SupportComponent } from './components/support/support.component';
import { TvShowsListComponent } from './components/tv-shows-list/tv-shows-list.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { SearchComponent } from './components/search/search.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { AboutComponent } from './components/about/about.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { TvCardComponent } from './components/tv-card/tv-card.component';
import { TvInfoComponent } from './components/tv-info/tv-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ScrollButtonComponent } from './components/scroll-button/scroll-button.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MovieListComponent,
    LibraryComponent,
    SupportComponent,
    TvShowsListComponent,
    HeaderNavComponent,
    SearchComponent,
    AddMovieComponent,
    AboutComponent,
    MovieInfoComponent,
    MovieCardComponent,
    TvCardComponent,
    TvInfoComponent,
    ErrorComponent,
    SearchResultsComponent,
    ScrollButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MovieService, TvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
