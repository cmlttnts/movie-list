import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MovieDetailItem, MovieSearchItem } from "../types";

export type MovieSearchResponse =
  | {
      Response: string;
      Search: MovieSearchItem[];
      totalResults: string; // but number
    }
  | {
      Error: string;
    };

export type MovieDetailResponse = MovieDetailItem | { Error: string };

// Define a service using a base URL and expected endpoints
export const imdbMoviesApi = createApi({
  reducerPath: "imdbMoviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    searchMoviesByTitle: builder.query<MovieSearchResponse, { title: string; page: number }>({
      query: ({ title, page }) => `?s=${title}&page=${page}&apikey=${import.meta.env.VITE_API_KEY}`,
    }),
    searchMovieByImdbID: builder.query<MovieDetailResponse, { imdbID: string }>({
      query: ({ imdbID }) => `?i=${imdbID}&apikey=${import.meta.env.VITE_API_KEY}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSearchMoviesByTitleQuery, useSearchMovieByImdbIDQuery } = imdbMoviesApi;
