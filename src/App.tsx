import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import { landingPageDTO, movieDTO } from './movies/movies.model';
import MoviesList from './movies/MoviesList';

function App() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(
      () => {
        setMovies({
          inTheaters: [{
            id: 1,
            title: 'Star Wars New Hope',
            poster: 'https://m.media-amazon.com/images/I/81w4kfIpSjL.jpg'
          }, {
            id: 2,
            title: 'Star Wars Empire Strike Back',
            poster: 'https://a.allegroimg.com/original/11397c/8a639dee4d2bacf8a041686caf15/STAR-WARS-EPISODE-V-THE-EMPIRE-STRIKES-BACK-DVD'
          }],
          upcoming: [
            {
              id: 1,
              title: 'Obi-Wan Kenobi',
              poster: 'https://cdn1.naekranie.pl/wp-content/uploads/2022%2F05%2FFR6mcs0XMAIQI-H_627278d335c84.jpeg'
            }, {
              id: 2,
              title: 'The Mandalorian',
              poster: 'https://static.posters.cz/image/750/plakaty/star-wars-the-mandalorian-nightfall-i103406.jpg'
            }
          ]
        })
      }, 1000);

    return () => clearTimeout(timerId);
  });

  return (
    <>
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />
      <h3>Upcoming</h3>
      <MoviesList movies={movies.upcoming} />
    </>
  );
}

export default App;
