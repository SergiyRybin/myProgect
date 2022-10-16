import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchById } from '../../servises/fetchRequaest';
import { useState } from 'react';
import Container from '../../components/Container/Container';
import s from '../../pages/FilmDetails/FilmDetails.module.css'
import iconNmae from '../../images/1.jpeg';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const FilmDetails = () => {
  const location = useLocation();

  const [filmDetail, setFilmDetail] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (location.state) {
      setQuery(location.state);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const id = useParams();

  const noDataRender = {
    original_title: 'No information',
    id: 1,
    poster_path: iconNmae,
    popularity: 0,
    overview: 'No information',
    genres: [{ name: 'No information' }],
  };

  if (filmDetail.length === 0) {
    fetchById(id.id)
      .then(data => {
        if (data) {
          return setFilmDetail(data);
        }
      })
      .catch(() => {
        setFilmDetail(noDataRender);
        return toast('Немає даних');
      });
  }

  const genres = filmDetail.genres;

  return (
    <Container>
      <NavLink to={!query ? '/5' : `/5/movies${query}`}>
        <button style={{ marginBottom: 10 }}>Go back</button>
      </NavLink>
      <div style={{ display: 'flex' }} key={filmDetail.id}>
        {
          <img
            width={250}
            src={
              filmDetail.original_title === 'No information'
                ? iconNmae
                : `https://image.tmdb.org/t/p/w500/${filmDetail.poster_path}`
            }
            alt={filmDetail.original_title}
          />
        }

        <div style={{ marginLeft: 20 }} key="title">
          <h1>{filmDetail.original_title}</h1>
          <p key={1}>
            {' '}
            Popularity: {Math.round(Number(filmDetail.popularity))}%
          </p>
          <h2>Overview</h2>
          <p key={2}>{filmDetail.overview}</p>
          <h2>Genres</h2>
          <div className={s.Genres} key="genres">
            {genres && genres.map((el, index) => <p key={index}>{el.name}</p>)}
          </div>
        </div>
      </div>

      <div className={s.CastRevievs}>
        <NavLink
          to="cast"
          key="cast"
          className={({ isActive }) =>
            isActive ? 'linkDetail activeDetails' : 'linkDetail'
          }
        >
          CAST
        </NavLink>
        <hr />
        <NavLink
          to="reviews"
          key="reviews"
          className={({ isActive }) =>
            isActive ? 'linkDetail activeDetails' : 'linkDetail'
          }
        >
          Reviews
        </NavLink>
        <hr />
        <Outlet />
      </div>
    </Container>
  );
};

export default FilmDetails;
