import { Component, OnInit } from '@angular/core';
import { CinemaModel } from 'src/app/models/cinema.model';
import { CinemaService } from 'src/app/services/cinema.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent {
  cinemas: CinemaModel[] = [];
  selectedCinema!: CinemaModel;
  movies: any[] = [];

  constructor(private cinemaService: CinemaService, private movieService: MovieService) {
    this.cinemaService.getAllCinemas().then(cinemas => {
      this.cinemas = cinemas;
    });
  }

  async onCinemaChange(event: any) {
    const cinemaId = event.target.value;
    this.selectedCinema = await this.cinemaService.getCinemaById(cinemaId);
    this.cinemaService.getMoviesByCinemaId(cinemaId).then(movies => {
      this.movies = movies;
    });
  }
  // async onCinemaChange(event: any) {
  //   const cinemaId = event.target.value;
  //   this.selectedCinema = await this.cinemaService.getCinemaById(cinemaId);
  //   if (this.selectedCinema) {
  //     this.cinemaService.getMoviesByCinemaId(this.selectedCinema._id).then(movies => {
  //       this.movies = movies;
  //     });
  //   } else {
  //     this.movies = [];
  //   }
  // }

  

  onDelete(movie: any) {
    if (this.selectedCinema && this.selectedCinema._id) {
      this.movieService.deleteMovie(movie._id).then(() => {
        console.log('Movie deleted successfully.');
        // Refresh the movie list
        this.cinemaService.getMoviesByCinemaId(this.selectedCinema._id).then(movies => {
          this.movies = movies;
        });
      }).catch(error => {
        console.log('Error deleting movie:', error);
        // Handle the error as needed
      });
    }
  }}


 
