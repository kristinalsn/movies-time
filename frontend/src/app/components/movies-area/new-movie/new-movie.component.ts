import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CinemaModel } from 'src/app/models/cinema.model';
import { MovieModel } from 'src/app/models/movie.model';
import { CinemaService } from 'src/app/services/cinema.service';
import { MovieService } from 'src/app/services/movie.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})

// export class NewMovieComponent {
//   cinemas: CinemaModel[] = [];
//   selectedCinema!: CinemaModel;
//   movies: any[] = [];

//   constructor(private movieService: MovieService ,private cinemaService: CinemaService) {
//     this.cinemaService.getAllCinemas().then(cinemas => {
//       this.cinemas = cinemas;
//     });

//   }
//   cinema: CinemaModel={
//     name: '',
//     _id: '', 
//     movieId: ''
//   }
//   movie: MovieModel = {
//     name: '',
//     dateTime: '',
//     duration: 0,
//   };
//   async onCinemaChange(event: any) {
//     const cinemaId = event.target.value;
//     this.selectedCinema = await this.cinemaService.getCinemaById(cinemaId);
//     this.cinemaService.getMoviesByCinemaId(cinemaId).then(movies => {
//       this.movies = movies;
//     });
//   }

//   // createMovie() {
//   //   this.movieService.createNewMovie(this.movie);
//   // }
//   createMovie() {
//     this.movieService.createNewMovie(this.movie).then(() => {
//       console.log('Movie created successfully.');
//       // Clear the form
//       this.movie = {
//         name: '',
//         dateTime: '',
//         duration: 0,
//       };
//     }).catch(error => {
//       console.log('Error creating movie:', error);
//       // Handle the error as needed
//     });
//   }


// }

// export class NewMovieComponent {
//   cinemas: CinemaModel[] = [];
//   selectedCinema!: CinemaModel;
//   movies: any[] = [];

//   constructor(private movieService: MovieService ,private cinemaService: CinemaService) {
//     this.cinemaService.getAllCinemas().then(cinemas => {
//       this.cinemas = cinemas;
//     });
//   }

//   movie: MovieModel = {
//     name: '',
//     dateTime: '',
//     duration: 0,
//   };
  
//   // async onCinemaChange(event: any) {
//   //   const cinemaId = event.target?.value;
//   //   this.selectedCinema = await this.cinemaService.getCinemaById(cinemaId);
//   //   this.cinemaService.getMoviesByCinemaId(cinemaId).then(movies => {
//   //     this.movies = movies;
//   //   });
//   // }
//   async onCinemaChange(event: any) {
//     const cinemaId = event.target?.value;
//     this.selectedCinema = await this.cinemaService.getCinemaById(cinemaId);
//     this.movies = []; 
//   }

//   addMovie() {
//     if (!this.selectedCinema) {
//       console.log('Error: No cinema selected.');
//       return;
//     }
  
//     this.movieService.addMovieByCinemaId(this.selectedCinema._id, this.movie).then(cinema => {
//       console.log('Movie added successfully to cinema:', cinema);
//       this.movie = {
//         name: '',
//         dateTime: '',
//         duration: 0,
//       };
//     }).catch(error => {
//       console.log('Error adding movie to cinema:', error);
//     });
//   }
// }

export class NewMovieComponent implements OnInit {
  cinemas!: CinemaModel[];
  selectedCinemaId!: string;
  // movies!: MovieModel[];
  movieForm: FormGroup;

  constructor(
    private cinemaService: CinemaService,
    private movieService: MovieService,
    private fb: FormBuilder,
  ) {
    this.movieForm = this.fb.group({
      name: ['', Validators.required],
      dateTime: ['', Validators.required],
      duration: ['', Validators.required]
    });
  }

  async ngOnInit() {
    this.cinemas = await this.cinemaService.getAllCinemas();
  }

   movies: MovieModel[] = [];
   
  //  async onCinemaChange(cinemaId: string) {
  //   this.selectedCinemaId = cinemaId;
  //   const newMovie = await this.movieService.addMovieByCinemaId(cinemaId, {name: '', dateTime: '', duration: 0});
  //   this.movies = [newMovie];
  // }  
  async onCinemaChange(event: Event) {
    const cinemaId = (event.target as HTMLSelectElement).value;
    this.selectedCinemaId = cinemaId;
    const newMovie: MovieModel = {
      name: '',
      dateTime: '',
      duration: 0
    };
    this.movies = [await this.movieService.addMovieByCinemaId(cinemaId, newMovie)];
  }
  
     async onSubmit() {
    if (this.movieForm.invalid) {
      return;
    }
  
    const newMovie: MovieModel = {
      name: this.movieForm.value.name,
      dateTime: this.movieForm.value.dateTime,
      duration: this.movieForm.value.duration
    };
  
    const addedMovie = await this.movieService.addMovieByCinemaId(this.selectedCinemaId, newMovie);
    this.movies.push(addedMovie); // add the addedMovie to the movies array
    this.movieForm.reset();
  }}