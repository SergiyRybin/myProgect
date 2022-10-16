import s from '../FilmCard/FilmCard.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import iconNmae from '../../images/2.jpeg';

const FilmCard = ({ film, state }) => {
  return (
    <Link to={`/5/movies/${film.id}`} state={state}>
      <img
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
            : iconNmae
        }
        alt={film.title ? film.title : film.name}
        className={s.ImageItem}
      />
      {film.title ? film.title : film.name}
    </Link>
  );
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  state: PropTypes.string,
};

export default FilmCard;
