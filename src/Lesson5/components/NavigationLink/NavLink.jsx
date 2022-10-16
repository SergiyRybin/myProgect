import { NavLink } from 'react-router-dom';
 
const Navigatinon = () => {
  return (
    <nav>
      <NavLink
        to="/5/"
        className={({isActive}) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to="/5/movies"
        className={({isActive})=> (isActive ? 'link active' : 'link')}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigatinon;
