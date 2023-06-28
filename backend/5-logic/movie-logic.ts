import { IMovieModel, MovieModel } from "../4-models/MoviesModel";

export  function getAllMovies(): Promise<IMovieModel[]> {
return MovieModel.find().populate("cinema").exec();
}

export  function getMovieById(id: string): Promise<IMovieModel> {
    return MovieModel.findById(id).exec();
}

export  function createNewMovie(movie: IMovieModel) {
    const errors= movie.validateSync();
    if(!errors) return movie.save();
    return errors;
}
export async function deleteMovie(id: string) {
const deletedMovie = await MovieModel.findByIdAndDelete(id).exec();
if(!deletedMovie) return undefined;
}

export  function updateMovie(movie: IMovieModel) {
    const errors= movie.validateSync();
    if (!errors) return MovieModel.findByIdAndUpdate(movie._id, movie, {returnOriginal: false});
    return errors;
}