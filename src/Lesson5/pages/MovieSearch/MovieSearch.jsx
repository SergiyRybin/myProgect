import { fetchQuery } from '../../servises/fetchRequaest';
import { useState, useEffect } from 'react';
import FilmList from '../../components/FilmList/FilmList';
import Container from '../../components/Container/Container';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';

const MovieSearch = () => {
  const location = useLocation();

  const query = location.search.slice(7, location.search.length);
  const [filmsSearch, setFilmSearch] = useState([]);

  useEffect(() => {
    if (query) {
      fetchQuery(query).then(({ results }) => {
        if (results.length === 0) {
          return toast('Немає фільма за таким запитом');
        }
        setFilmSearch({ results });
      });
    }
  }, [query]);

  const data = filmsSearch.results;
  return (
    <>
      <Container>
        <FilmList data={data} state={location.search} />
      </Container>
    </>
  );
};

export default MovieSearch;
