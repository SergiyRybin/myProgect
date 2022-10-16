import PropTypes from 'prop-types';

import FilmCard from '../FilmCard/FilmCard';
import s from '../FilmList/FilmList.module.css';

const FilmList = ({ data, state }) => {
  return (
    <ul className={s.FilmList}>
      {data &&
        data.map(film => <FilmCard film={film} key={film.id} state={state} />)}
    </ul>
  );
};

FilmList.propTypes = {
  data: PropTypes.array,
  state: PropTypes.string,
};

export default FilmList;
