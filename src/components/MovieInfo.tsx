import { MovieDetailItem } from "../types";

export function MovieInfo({ movie }: { movie: MovieDetailItem }) {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <img src={movie.Poster} style={{ maxHeight: "500px", objectFit: "contain" }} alt={movie.Title} />
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
