import { Link, useParams } from "react-router-dom";
import { Alert } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useSearchMovieByImdbIDQuery } from "../services/movie";
import { MovieInfo } from "../components/MovieInfo";
import { ArrowLeft } from "@mui/icons-material";
export function MovieDetailPage() {
  const params = useParams<{ id: string }>();
  console.log("params: ", params);

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
      <Link to="/" style={{ display: "flex", position: "absolute", top: "1rem", right: "1rem" }}>
        <ArrowLeft />
        Go Back
      </Link>
    </div>
  );
}
