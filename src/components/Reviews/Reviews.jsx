import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from 'MovieApi/MovieApi';
import Loader from 'components/Loader/Loader';
import { List } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviewsFilms = async () => {
      try {
        setLoading(true);
        const reviews = await fetchReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviewsFilms();
  }, [movieId]);

  const renderReviews = () => {
    if (loading) {
      return <Loader />;
    } else if (reviews.length === 0) {
      return <div>We don't have any reviews for this movie</div>;
    } else {
      return (
        <div>
          <List>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </List>
        </div>
      );
    }
  };

  return <>{renderReviews()}</>;
};

export default Reviews;
