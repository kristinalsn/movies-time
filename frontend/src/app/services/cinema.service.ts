import { Injectable } from '@angular/core';
import axios from 'axios';
import { CinemaModel } from '../models/cinema.model';
import { MovieModel } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  async getAllCinemas(): Promise<CinemaModel[]> {
    const r = await fetch('http://localhost:3000/api/cinemas');
    return await r.json();
  }
  async getCinemaById(cinemaId: string): Promise<CinemaModel> {
    const r = await fetch(`http://localhost:3000/api/cinemas/${cinemaId}`);
    return await r.json();
}
  async getMoviesByCinemaId(cinemaId:string): Promise<MovieModel[]> {
    const r = await fetch(`http://localhost:3000/api/cinemas/${cinemaId}/movies`);
    return await r.json();
  }


  



}

