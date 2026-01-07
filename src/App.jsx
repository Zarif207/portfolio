import { BrowserRouter } from "react-router-dom";
import Router from "./Router/Router";


export default function App() {
  return (
    <BrowserRouter>
      <div className="relative z-10">
        <Router />
      </div>
    </BrowserRouter>
  );
}