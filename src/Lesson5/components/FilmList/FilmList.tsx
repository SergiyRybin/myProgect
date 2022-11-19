import FilmCard from '../FilmCard/FilmCard';
import s from '../FilmList/FilmList.module.css';

interface IFilm {
  id: string;
  title: string;
  name: string;
  poster_path: string;
}

interface IFilmList{
  data: IFilm[]
  state: string
}

const FilmList: React.FC<IFilmList> = ({ data, state }): JSX.Element => {
  return (
    <ul className={s.FilmList}>
      {data &&
        data.map(film => <FilmCard film={film} key={film.id} state={state} />)}
    </ul>
  );
};

export default FilmList;
