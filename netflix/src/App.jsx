import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from "./components/header";
import Home from "./pages/home";
import TVShows from "./pages/tv show.jsx";
import Movies from "./pages/Movie";
import Latest from "./pages/latest";
function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-black min-h-screen">
      {/* Permanent Navigation Bar */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Dynamic Page Views */}
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/tv-shows" element={<TVShows searchQuery={searchQuery} />} />
        <Route path="/movies" element={<Movies searchQuery={searchQuery} />} />
        <Route path="/latest" element={<Latest searchQuery={searchQuery} />} />
      </Routes>
    </div>
  );
}

export default App;