import mongoose from "mongoose";
import { CinemaModel, ICinemaModel } from "../4-models/CinemaModel";
import { IMovieModel, MovieModel } from "../4-models/MoviesModel";


// export  function getAllCinemas(): Promise<ICinemaModel[]> {
//     return CinemaModel.find().populate("cinema").exec();
//     }
export function getAllCinemas(): Promise<ICinemaModel[]> {
    return CinemaModel.find().populate("movie").exec();
}
export  function getCinemaById(id: string): Promise<ICinemaModel> {
    return CinemaModel.findById(id).exec();
}


// export function getMoviesByCinemaId(cinemaId: string): Promise<IMovieModel> {
//     return MovieModel.findById({ cinema: cinemaId }).exec();
// }
export function getMoviesByCinemaId(cinemaId: string): Promise<IMovieModel[]> {
    return MovieModel.find({ cinemaId }).exec();
}

export async function addMovieByCinemaId(cinemaId: string, movie: IMovieModel): Promise<ICinemaModel> {
    // Validate cinemaId
    if (!mongoose.Types.ObjectId.isValid(cinemaId)) {
      throw new Error('Invalid cinemaId');
    }
  
    // Create new movie document
    const newMovie = new MovieModel({
      name: movie.name,
      dateTime: movie.dateTime,
      duration: movie.duration,
      cinemaId: cinemaId // pass the cinemaId instead of the cinema object
    });
  
    // Save movie to database
    await newMovie.save();
  
    // Add movie reference to cinema's movie array
    const cinema = await CinemaModel.findById(cinemaId);
    if (!cinema) {
      throw new Error('Cinema not found');
    }
    cinema.movies.push(newMovie);
    await cinema.save();
  
    return cinema;
  }//     const movie = await MovieModel.findById(movieId).exec();
//     if (cinema && movie) {
//       cinema.movies.push(movie);
//       await cinema.save();
//     }
//     return cinema;
//   }




