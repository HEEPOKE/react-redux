import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppRouter />
);
