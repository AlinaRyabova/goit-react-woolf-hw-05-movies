import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'MovieApi/MovieApi';
import Loader from 'components/Loader/Loader';
import { List, Text } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchActors = async () => {
      setLoading(true);

      try {
        const actorsData = await fetchCast(movieId);
        setActors(actorsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActors();
  }, [movieId]);

  return (
    <div>
      {loading ? <Loader /> : null}

      <List>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width="200px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://ichef.bbci.co.uk/news/640/cpsprodpb/C7CA/production/_104864115_b1fef570-1bdf-441d-9724-3a72e5d46e91.jpg`
              }
              alt={original_name}
            />
            <Text>{name}</Text>
            <Text>Character: {character}</Text>
          </li>
        ))}
      </List>
    </div>
  );
};

export default Cast;
