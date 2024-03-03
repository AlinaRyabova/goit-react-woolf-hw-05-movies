import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from 'components/Layout/Layout';

const Home = lazy(() => import('Page/Home/Home'));
const Movies = lazy(() => import('Page/Movies/Movies'));
const MovieDetails = lazy(() => import('Page/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
export default App;
