
export const fetchTrendFilm = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=946fd192c485f6dbf39faf2135c337c0
    `
  ).then(r => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error(`Error: ${r.status} ${r.statusText}`));
  });
};

export const fetchQuery = (query: string) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=946fd192c485f6dbf39faf2135c337c0&language=en-US&query=${query}&page=1&include_adult=false
    `
  ).then(r => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error(`Error: ${r.status} ${r.statusText}`));
  });
};

export const fetchById = (id: string | undefined) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=946fd192c485f6dbf39faf2135c337c0&language=en-US
    `
  ).then(r => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error(`Error: ${r.status} ${r.statusText}`));
  });
};

export const fetchByIdCast = (id: string | undefined) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=946fd192c485f6dbf39faf2135c337c0
    `
  ).then(r => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error(`Error: ${r.status} ${r.statusText}`));
  });
};

export const fetchByIdreviews = (id: string | undefined) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=946fd192c485f6dbf39faf2135c337c0
    `
  ).then(r => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error(`Error: ${r.status} ${r.statusText}`));
  });
};

