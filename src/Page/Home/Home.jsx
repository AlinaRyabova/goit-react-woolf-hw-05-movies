import React, { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { fetchTrending } from 'MovieApi/MovieApi';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        setLoading(true);
        const trendingFilms = await fetchTrending();
        setFilms(trendingFilms);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {loading ? <Loader /> : <MovieList films={films} />}
    </main>
  );
};

export default Home;
