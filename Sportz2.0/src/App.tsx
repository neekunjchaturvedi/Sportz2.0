import { Routes, Route } from "react-router-dom";
import "./App.css";

import About from "./pages/about";

import Home from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes here as needed */}
      </Routes>
    </>
  );
}

export default App;
