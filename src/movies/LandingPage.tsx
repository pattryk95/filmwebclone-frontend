import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { urlMovies } from "../endpoints";
import { landingPageDTO } from "./movies.model";
import MoviesList from "./MoviesList";

export default function LandingPage()
{
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() =>
  {
    axios.get(urlMovies).then((response: AxiosResponse<landingPageDTO>) =>
    {
      setMovies(response.data);
    })
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