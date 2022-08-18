import { useEffect, useState } from "react";
import { landingPageDTO } from "./movies.model";
import MoviesList from "./MoviesList";

export default function LandingPage()
{
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() =>
  {

  }, []);
  return (
    <>
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3>Upcoming</h3>
      <MoviesList movies={movies.upcoming} />
    </>
  )
}