import { store } from "./store/store";
import { Provider } from "react-redux";

export function Providers({ children }: React.PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
