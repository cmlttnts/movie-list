import { Link, useParams } from "react-router-dom";
import { Alert } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useSearchMovieByImdbIDQuery } from "../services/movie";
import { MovieInfo } from "../components/MovieInfo";
import { ArrowLeft } from "@mui/icons-material";
import "./MovieDetail.scss";

export function MovieDetailPage() {
  const params = useParams<{ id: string }>();

  const { data, isFetching, error } = useSearchMovieByImdbIDQuery(
    { imdbID: params.id! },
    {
      skip: !params.id,
    },
  );

  if (isFetching) {
    return <CircularProgress />;
  }

  if (!data || error) {
    return <Alert severity="error">No Data</Alert>;
  }

  return (
    <div>
      {data && "Error" in data ? (
        <Alert severity="error">{data.Error}</Alert>
      ) : (
        <>
          <MovieInfo movie={data} />
        </>
      )}
      <Link to="/" className="go-back-link">
        <ArrowLeft />
        Go Back
      </Link>
    </div>
  );
}
