import { actorMovieDTO } from "../actors/actors.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";

export interface movieDTO {
  id: number;
  title: string;
  poster: string;
}

export interface movieCreationDTO {
  title: string;
  inTheaters: boolean;
  trailer: string;
  releaseDate?: Date;
  poster?: File;
  posterURL?: string;
  genresIds?: number[];
  movieTheatersIds?: number[];
  actors?: actorMovieDTO[];
}

export interface landingPageDTO {
  inTheaters?: movieDTO[];
  upcoming?: movieDTO[];
}

export interface moviesPostGetDTO{
  genres: genreDTO[];
  movieTheaters: movieTheaterDTO[];
}
