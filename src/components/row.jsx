import React, { useState, useEffect, useRef } from "react";
import axios from "../utils/axios";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function Row({ title, fetchUrl, isLargeRow = false, searchQuery = "" }) {
  const [movies, setMovies] = useState([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const rowRef = useRef(null);

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

  const filteredMovies = movies.filter((movie) => {
    if (!searchQuery) return true;
    const name = movie?.title || movie?.name || movie?.original_name || "";
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  if (searchQuery && filteredMovies.length === 0) {
    return null;
  }

  // Native smooth scroll for desktop arrow buttons
  const handleScroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollAmount = clientWidth * 0.8;
      const newScrollPosition =
        direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;

      rowRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  // Show/hide left arrow based on actual scroll position
  const handleOnScroll = () => {
    if (rowRef.current) {
      setShowLeftArrow(rowRef.current.scrollLeft > 10);
    }
  };

  return (
    <div className="text-white ml-4 md:ml-8 my-6 relative group">
      <h2 className="text-lg md:text-2xl font-bold mb-3">{title}</h2>

      {/* Outer Wrapper */}
      <div className="relative w-full">
        {/* LEFT ARROW BUTTON (Desktop) */}
        {showLeftArrow && (
          <button
            onClick={() => handleScroll("left")}
            className="hidden md:flex items-center justify-center absolute left-0 top-0 bottom-0 z-40 bg-black/70 text-white font-bold px-4 text-2xl hover:bg-black/90 transition-all cursor-pointer"
          >
            &#10094;
          </button>
        )}

        {/* NATIVE SCROLLABLE IMAGE CONTAINER (Touch swipe on mobile + smooth scroll on desktop) */}
        <div
          ref={rowRef}
          onScroll={handleOnScroll}
          className="flex space-x-4 p-2 overflow-x-auto overflow-y-hidden scroll-smooth no-scrollbar"
        >
          {filteredMovies
            .filter((m) => (isLargeRow ? m.poster_path : m.backdrop_path))
            .map((movie) => (
              <img
                key={movie.id}
                className={`object-cover rounded transition-transform duration-300 hover:scale-105 cursor-pointer shrink-0 ${
                  isLargeRow ? "h-60 w-36" : "h-32 w-48"
                }`}
                src={`${IMAGE_BASE_URL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title || movie.name}
              />
            ))}
        </div>

        {/* RIGHT ARROW BUTTON (Desktop) */}
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