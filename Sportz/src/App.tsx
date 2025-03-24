import { useState } from "react";

import "./App.css";
import Navbar from "./pages/navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
