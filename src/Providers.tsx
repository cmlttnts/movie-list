import { RouterProvider, RouterProviderProps } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { Store } from "@reduxjs/toolkit";

export function Providers({ router, store }: RouterProviderProps & { store: Store }) {
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  );
}
