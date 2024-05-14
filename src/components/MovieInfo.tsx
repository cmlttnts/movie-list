import { Card, List, ListItem, ListItemText } from "@mui/material";
import { MovieDetailItem } from "../types";
import "./MovieInfo.scss";

export function MovieInfo({ movie }: { movie: MovieDetailItem }) {
  return (
    <Card className="movie-info-container">
      <img src={movie.Poster} className="movie-poster" alt={movie.Title} />
      <List>
        <ListItem>
          <ListItemText primary={`Title: ${movie.Title}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Actors: ${movie.Actors}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Duration: ${movie.Runtime}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Genre: ${movie.Genre}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Director: ${movie.Director}`} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={`IMDB Rating: ${movie.Ratings.find((r) => r.Source === "Internet Movie Database")?.Value || "N/A"}`}
          />
        </ListItem>
      </List>
    </Card>
  );
}
