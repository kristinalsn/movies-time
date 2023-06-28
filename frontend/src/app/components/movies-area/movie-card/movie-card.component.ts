import { Component,Input } from '@angular/core';
import { CinemaModel } from 'src/app/models/cinema.model';
import { MovieModel } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  // @Input()
  // movie!: MovieModel;
  // cinema!: CinemaModel
}
