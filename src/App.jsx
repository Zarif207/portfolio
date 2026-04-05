import { BrowserRouter } from "react-router-dom";
import Router from "./Router/Router";
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative z-10">
        <Router />
      </div>
    </BrowserRouter>
  );
}