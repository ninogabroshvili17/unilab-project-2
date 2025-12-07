import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import WomenClothes from "./pages/WomenClothes";
import NavigationBar from "./components/Home/NavigationBar.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<WomenClothes />} />
      </Routes>
    </Router>
  );
}

export default App;
