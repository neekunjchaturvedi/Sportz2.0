import { Routes, Route } from "react-router-dom";
import "./App.css";

import About from "./pages/about";
import Home from "./pages/Home";
import SportsAppLogin from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<SportsAppLogin />} />
        {/* Add more routes here as needed */}
      </Routes>
    </>
  );
}

export default App;
