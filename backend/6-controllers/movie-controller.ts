import { Router } from "express";
import { MovieModel } from "../4-models/MoviesModel";
import { createNewMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from "../5-logic/movie-logic";

export const movieRouter = Router();

movieRouter.get('/movies', async (req, res, next) => {
    const movies = await getAllMovies();
    res.json(movies);
})

movieRouter.get('/movies/:id', async (req, res, next) => {
    try{
    const movie = await getMovieById(req.params.id);
    if (!movie) {
        res.sendStatus(404);
        return;
    }
    res.json(movie);
} catch (e) {
    res.sendStatus(404);
}
})

movieRouter.post('/movies', async (req, res, next) => {
    const movie = await createNewMovie(new MovieModel(req.body));
    res.json(movie);
})

movieRouter.delete('/movies/:id', async (req, res, next) => {
    const movie = await deleteMovie(req.params.id);
    res.json(movie);
})

movieRouter.put('/movies/:id', async (req, res, next) => {
    const movie = await updateMovie(new MovieModel({ _id: req.params.id, ...req.body}));
    res.json(movie);
})
