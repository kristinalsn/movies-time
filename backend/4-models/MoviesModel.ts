
import mongoose from "mongoose"
import { CinemaModel } from "./CinemaModel";

// export interface IMovieModel extends mongoose.Document {
//     name: string,
//     dateTime: string,
//     duration: number,
//     cinemaId: mongoose.Schema.Types.ObjectId;

// }

// const MovieSchema = new mongoose.Schema<IMovieModel>({
//     name: {
//         type: String,
//         required: true,
//         minLength: [2, "Movie name have to be longer than 2 chars"],
//     },
//     dateTime: {
//         type: String,
//         required: true,
//         // minLength: [2, " Date have to be "],
//     },
//     duration: {
//         type: Number,
//         required: true,
//         min: [0, "Duration have to be positive"],
//     },
// },
//     {
//         versionKey: false,
//         toJSON: {virtuals:true},
//         id: false,
//     }
// );

// MovieSchema.virtual("cinema", {
//     ref: CinemaModel,
//     localField: "cinemaId",
//     foreignField: "_id",
//     justOne: true,
// });

// export const MovieModel = mongoose.model<IMovieModel>(
//     'movies',
//     MovieSchema
// );

export interface IMovieModel extends mongoose.Document {
    name: string;
    dateTime: Date;
    duration: number;
    cinemaId: string;
  }
  
  const MovieSchema = new mongoose.Schema<IMovieModel>({
    name: {
      type: String,
      required: true,
      minLength: [2, "Movie name have to be longer than 2 chars"],
    },
    dateTime: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    cinemaId: {
        type: String,
        ref: 'cinemas',
        required: true,
      },
      });
  
  export const MovieModel = mongoose.model<IMovieModel>('Movie', MovieSchema);