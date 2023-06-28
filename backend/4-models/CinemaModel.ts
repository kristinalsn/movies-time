// import mongoose from "mongoose"
// import { MovieModel } from "./MoviesModel";

// export interface ICinemaModel extends mongoose.Document {
//     // id?:string;
//     _id: mongoose.Schema.Types.ObjectId;
//     name: string,
//     movieId: mongoose.Schema.Types.ObjectId;

// }

// const CinemaSchema = new mongoose.Schema<ICinemaModel>({
//     name: {
//         type: String,
//         required: true,
//         minLength: [2, "Cinema name have to be longer than 2 chars"],

//     }
// },
// {
//     versionKey: false,
//     toJSON: {virtuals:true},
//     id: false,

// }
// );
// CinemaSchema.virtual("movie", {
//     ref: MovieModel,
//     localField: "movieId",
//     foreignField: "_id",
//     justOne: true,
// });


// export const CinemaModel= mongoose.model<ICinemaModel>(
//     'cinemas',
//     CinemaSchema
//      );

import mongoose from 'mongoose';
import { IMovieModel } from './MoviesModel';

export interface ICinemaModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  movies: IMovieModel[];
}

const CinemaSchema = new mongoose.Schema<ICinemaModel>(
  {
    name: {
      type: String,
      required: true,
      minLength: [2, "Cinema name have to be longer than 2 chars"],
    },
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
  },
  {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false,
  }
);

CinemaSchema.virtual('movie', {
  ref: 'Movie',
  localField: 'movies',
  foreignField: '_id',
  justOne: false,
});

export const CinemaModel = mongoose.model<ICinemaModel>(
  'Cinema',
  CinemaSchema
);
