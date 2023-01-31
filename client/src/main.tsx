import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faSquarePen,
  faTrashCan,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { AppContextProvider } from "./contexts/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./assets/css/auth.css";

library.add(fas, faSquarePen, faTrashCan, faUser, faRightFromBracket);

export default function App() {
  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  App()
);
