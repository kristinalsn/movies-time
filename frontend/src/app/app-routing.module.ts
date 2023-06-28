import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/layout/main/home/home.component';
import { MovieCardComponent } from './components/movies-area/movie-card/movie-card.component';
import { MovieListComponent } from './components/movies-area/movie-list/movie-list.component';
import { NewMovieComponent } from './components/movies-area/new-movie/new-movie.component';
// import { ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/new', component: NewMovieComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
