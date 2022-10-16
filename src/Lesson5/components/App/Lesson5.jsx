import "react-loader-spinner";
import Container from "../Container/Container";
import NavBar from "../NavigationBar/NavBar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import { ToastContainer } from "react-toastify";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../../pages/Home"));
const MovieSearch = lazy(() => import("../../pages/MovieSearch/MovieSearch"));
const MoviesBar = lazy(() => import("../../pages/MovieBar/MoviesBar"));
const FilmDetails = lazy(() => import("../../pages/FilmDetails/FilmDetails"));
const Cast = lazy(() => import("../../pages/Cast/Cast"));
const Reviews = lazy(() => import("../../pages/Reviews/Reviews"));

const Lesson5 = () => {
  const location = useLocation();

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Container>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/movies"
              element={location.search ? <MovieSearch /> : <MoviesBar />}
            />
            <Route path="/movies/:id" element={<FilmDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="5/*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
        <ToastContainer />
      </Suspense>
    </>
  );
};

export default Lesson5;
