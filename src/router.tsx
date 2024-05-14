import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { MovieDetailPage } from "./pages/MovieDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetailPage />,
  },
]);
