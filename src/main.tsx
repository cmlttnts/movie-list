import React from "react";

import ReactDOM from "react-dom/client";
import { Providers } from "./Providers.tsx";
import { router } from "./router.tsx";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers router={router} store={store} />
  </React.StrictMode>,
);
