import { useParams } from "react-router-dom";

export function MovieDetailPage() {
  const params = useParams();
  console.log("params: ", params);
  return (
    <div>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
}
