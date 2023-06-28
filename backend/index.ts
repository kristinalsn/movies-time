import express, { json } from 'express';
import { connect } from './2-utils/dal';
import { movieRouter } from './6-controllers/movie-controller';
import cors from 'cors'
import { cinemaRouter } from './6-controllers/cinema-controller';
const server = express();

server.use(json());
server.use(cors());
server.use('/api', movieRouter);
server.use('/api', cinemaRouter);

server.listen(3000, () => {
    console.log('Listening on port 3000...');
    connect();
})

