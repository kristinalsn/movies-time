import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MovieCardComponent } from './components/movies-area/movie-card/movie-card.component';
import { NewMovieComponent } from './components/movies-area/new-movie/new-movie.component';
import { MovieListComponent } from './components/movies-area/movie-list/movie-list.component';
import { ComponentComponent } from './components/component.component';
import { HomeComponent } from './components/layout/main/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MainComponent } from './components/layout/main/main.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    LayoutComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
     MenuComponent,
    MovieCardComponent,
    NewMovieComponent,
    MovieListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
