import { Injectable } from '@angular/core';
import axios from 'axios';
import { MovieModel } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  async getAllMovies(): Promise<MovieModel[]> {
    const r = await fetch('http://localhost:3000/api/movies');
    return await r.json();
  }

  // createNewMovie(movie: MovieModel) {
  //   return axios.post('http://localhost:3000/api/movies', movie);
  // }
  deleteMovie(id: string) {
    return axios.delete(`http://localhost:3000/api/movies/${id}`);
  }

  async addMovieByCinemaId(cinemaId: string, movie: MovieModel): Promise<MovieModel> {
    const response = await axios.post(`http://localhost:3000/api/cinemas/${cinemaId}/movies`, movie);
    return response.data;
  }  }
