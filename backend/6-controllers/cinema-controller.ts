import { Router } from "express";
import { addMovieByCinemaId, getAllCinemas, getCinemaById, getMoviesByCinemaId } from "../5-logic/cinema-logic";


export const cinemaRouter = Router();

cinemaRouter.get('/cinemas', async (req, res, next) => {
    const cinemas = await getAllCinemas();
    res.json(cinemas);
})

cinemaRouter.get('/cinemas/:id', async (req, res, next) => {
    try{
    const cinema = await getCinemaById(req.params.id);
    if (!cinema) {
        res.sendStatus(404);
        return;
    }
    res.json(cinema);
} catch (e) {
    res.sendStatus(404);
}
});
// cinemaRouter.get('/cinemas/:id/movies', async(req, res, next) => {
//     try {
//         const movies = await getMoviesByCinemaId(req.params.id);
//         res.json(movies);
//     } catch (e) {
//         res.sendStatus(404);
//     }
// })
cinemaRouter.get('/cinemas/:id/movies', async(req, res, next) => {
    try {
        const movies = await getMoviesByCinemaId(req.params.id);
        res.json(movies);
    } catch (e) {
        res.sendStatus(404);
    }
});

// GET /api/cinemas/:id
// cinemaRouter.get('/:id', async (req, res) => {
//     const cinema = await getCinemaById(req.params.id);
//     if (cinema) {
//       res.json(cinema);
//     } else {
//       res.sendStatus(404);
//     }
//   });
  
  // POST /api/cinemas/:id/movies
  cinemaRouter.post('/cinemas/:id/movies', async (req, res) => {
    try {
      const cinema = await addMovieByCinemaId(req.params.id, req.body);
      res.json(cinema);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });  