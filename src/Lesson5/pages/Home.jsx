import FilmList from '../components/FilmList/FilmList';
import Container from '../components/Container/Container';
import { fetchTrendFilm } from '../servises/fetchRequaest';
import { useState, useEffect } from 'react';

const Home = () => {
  const [films, setFilm] = useState([]);

  useEffect(() => {
    if (films.length === 0) {
      fetchTrendFilm().then(({ results }) => setFilm({ results }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const data = films.results;

  return (
    <Container>
      <h1>Trending today</h1>
      <FilmList data={data} />
    </Container>
  );
};

export default Home;
