import React from "react";
import { Link } from "react-router-dom";
function MoviesList({ movies }) {
  const renderMovies = movies.map(movie => {
    return (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
      </li>
    );
  });
  return <div>{renderMovies}</div>;
}
export default MoviesList;
