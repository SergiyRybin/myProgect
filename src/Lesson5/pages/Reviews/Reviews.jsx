import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchByIdreviews } from '../../servises/fetchRequaest';

 const Reviews = () => {
  const [reviews, setReviews] = useState('');
  const id = useParams();

  if (reviews.length === 0) {
    fetchByIdreviews(id.id).then(data => setReviews(data));
  }

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {reviews &&
          reviews.results.map(el => (
            <li key={el.id}>
              <h3>Author: {el.author}</h3>
              <p>{el.content}</p>
            </li>
          ))}
        {reviews.total_results === 0 && (
          <p>We don't have any reviews for this movie </p>
        )}
      </ul>
    </div>
  );
};

export default Reviews