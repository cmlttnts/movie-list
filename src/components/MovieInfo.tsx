import { MovieDetailItem } from "../types";
import "./MovieInfo.scss";

export function MovieInfo({ movie }: { movie: MovieDetailItem }) {
  return (
    <div className="movie-info-container">
      <img src={movie.Poster} className="movie-poster" alt={movie.Title} />
      <div>
        <p>
          <b>Title:</b> {movie.Title}
        </p>
        <p>
          <b>Actors:</b>
          {movie.Actors}
        </p>
        <p>
          <b>Duration:</b> {movie.Runtime}
        </p>
        <p>
          <b>Genre:</b> {movie.Genre}
        </p>
        <p>
          <b>Director:</b> {movie.Director}
        </p>
        <p>
          <b>IMDB Rating:</b> {movie.Ratings.find((r) => r.Source === "Internet Movie Database")?.Value || "N/A"}
        </p>
      </div>
    </div>
  );
}
