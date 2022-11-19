// import s from "../FilmCard/FilmCard.module.css";
import s from "../FilmCard/FilmCard.module.css";
import { Link } from "react-router-dom";
import iconNmae from "../../images/2.jpeg";

interface IFilm {
  id: string;
  title: string;
  name: string;
  poster_path: string;
}

interface IFilmCard {
  film: IFilm;
  state: string;
}

const FilmCard: React.FC<IFilmCard> = ({ film, state }) => {
  return (
    <Link to={`/5/movies/${film.id}`} state={state} className={s.ListItem}>
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

export default FilmCard;
