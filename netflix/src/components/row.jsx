import React, { useState, useEffect } from "react";
import axios from "../utils/axios";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function Row({ title, fetchUrl, isLargeRow = false, searchQuery = "" }) {
  const [movies, setMovies] = useState([]);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data?.results || []);
      } catch (error) {
        console.error("Error loading row:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  // Filter movies matching search input
  const filteredMovies = movies.filter((movie) => {
    if (!searchQuery) return true;
    const name = movie?.title || movie?.name || movie?.original_name || "";
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (searchQuery && filteredMovies.length === 0) {
    return null;
  }

  // Handle Left & Right button clicks by adjusting offset distance
  const handleScroll = (direction) => {
    const distance = 800; // Pixels to move on each click
    if (direction === "left") {
      setScrollX((prev) => Math.min(prev + distance, 0));
    } else {
      // Calculate max negative scroll based on total estimated items
      const maxScroll = -(filteredMovies.length * (isLargeRow ? 160 : 200) - 800);
      setScrollX((prev) => Math.max(prev - distance, maxScroll < 0 ? maxScroll : 0));
    }
  };

  return (
    <div className="text-white ml-4 md:ml-8 my-6 relative group overflow-hidden">
      <h2 className="text-lg md:text-2xl font-bold mb-3">{title}</h2>

      {/* Outer Wrapper */}
      <div className="relative w-full">
        
        {/* LEFT ARROW BUTTON */}
        {scrollX < 0 && (
          <button
            onClick={() => handleScroll("left")}
            className="hidden md:flex items-center justify-center absolute left-0 top-0 bottom-0 z-40 bg-black/70 text-white font-bold px-4 text-2xl hover:bg-black/90 transition-all cursor-pointer"
          >
            &#10094;
          </button>
        )}

        {/* MOVING IMAGE CONTAINER */}
        <div
          className="flex space-x-4 p-2 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(${scrollX}px)` }}
        >
          {filteredMovies
            .filter((m) => (isLargeRow ? m.poster_path : m.backdrop_path))
            .map((movie) => (
              <img
                key={movie.id}
                className={`object-cover rounded transition-transform duration-300 hover:scale-105 cursor-pointer shrink-0 ${
                  isLargeRow ? "h-60 w-36" : "h-32 w-48"
                }`}
                src={`${IMAGE_BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.title || movie.name}
              />
            ))}
        </div>

        {/* RIGHT ARROW BUTTON */}
        <button
          onClick={() => handleScroll("right")}
          className="hidden md:flex items-center justify-center absolute right-0 top-0 bottom-0 z-40 bg-black/70 text-white font-bold px-4 text-2xl hover:bg-black/90 transition-all cursor-pointer"
        >
          &#10095;
        </button>

      </div>
    </div>
  );
}

export default Row;