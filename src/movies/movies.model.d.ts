import { actorMovieDTO } from "../actors/actors.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import { genreDTO } from "../genres/genres.model";

export interface movieDTO {
  id: number;
  title: string;
  poster: string;

  inTheaters: boolean;
  trailer: string;
  summary?: string;
  releaseDate: Date;
  genres: genreDTO[];
  movieTheaters: movieTheaterDTO[];
  actors: actorMovieDTO[];
}

export interface movieCreationDTO {
  title: string;
  inTheaters: boolean;
  trailer: string;
  summary?: string;
  releaseDate?: Date;
  poster?: File;
  posterURL?: string;
  genresId?: number[];
  movieTheatersId?: number[];
  actors?: actorMovieDTO[];
}

export interface landingPageDTO {
  inTheaters?: movieDTO[];
  upcoming?: movieDTO[];
}

export interface moviesPostGetDTO {
  genres: genreDTO[];
  movieTheaters: movieTheaterDTO[];
}
