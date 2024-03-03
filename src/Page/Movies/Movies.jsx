import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import Form from 'components/Form/Form';
import { fetchSearchByKeyword } from 'MovieApi/MovieApi';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchMovies = async queryMovie => {
    try {
      setSearchParams({ query: queryMovie });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const queryMovie = searchParams.get('query');
      if (!queryMovie) {
        return;
      }
      setLoading(true);
      try {
        const searchResults = await fetchSearchByKeyword(queryMovie);
        setSearchFilms(searchResults);
        setNoMoviesText(searchResults.length === 0);
      } catch (error) {
        console.log(error);
        setSearchFilms([]);
        setNoMoviesText(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchParams]);

  return (
    <main>
      <Form searchMovies={searchMovies} />
      {loading && <Loader />}
      {noMoviesText && searchFilms.length === 0 && (
        <p>There are no movies with this request. Please, try again.</p>
      )}
      {searchFilms.length > 0 && <MovieList films={searchFilms} />}
    </main>
  );
};

export default Movies;
