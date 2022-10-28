import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MoviesBar: React.FC = () => {
  const [, setSearchFilm] = useSearchParams();

  const fromCahnge = (e: React.FormEvent) => {
    e.preventDefault();
    const nameValue = (e.currentTarget as any).elements.query.value.toLowerCase().trim();
    if (nameValue === '') {
      return toast('Введіть назву фільма');
    }
    setSearchFilm({ query: nameValue });
  };

  return (
    <>
      <header>
        <form onSubmit={fromCahnge}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <Outlet />
    </>
  );
};

export default MoviesBar;
