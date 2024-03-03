import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'MovieApi/MovieApi';
import Loader from 'components/Loader/Loader';
import { Container, List, ListInfo, LinkInfo } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetailsFilms = async () => {
      try {
        setLoading(true);
        const detailMovie = await fetchMovieDetails(movieId);
        setMovieInfo(detailMovie);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetailsFilms();
  }, [movieId]);

  if (!movieInfo) {
    return null;
  }

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo;

  return (
    <>
      <Link
        to={location.state?.from ?? '/'}
        style={{
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '18px',
          color: '#5a0341',
        }}
      >
        Go back
      </Link>
      {loading && <Loader />}

      <Container>
        <img
          width="300px"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://ichef.bbci.co.uk/news/640/cpsprodpb/C7CA/production/_104864115_b1fef570-1bdf-441d-9724-3a72e5d46e91.jpg'
          }
          alt={original_title}
        />

        <div>
          <h1>
            {title} ({release_date.slice(0, 4)})
          </h1>
          <p>User score: {popularity}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <List>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </List>
        </div>
      </Container>

      <hr />

      <div>
        <h3>Additional information</h3>
        <ListInfo>
          <li>
            <LinkInfo to="cast">Cast</LinkInfo>
          </li>
          <li>
            <LinkInfo to="reviews">Reviews</LinkInfo>
          </li>
        </ListInfo>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
