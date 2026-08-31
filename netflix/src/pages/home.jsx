import { useState, useEffect } from "react";
import Row from "../../Netflix-Clone/components/row.jsx";
import Footer from "../../Netflix-Clone/components/footer.js";
import requests from "../utils/request.js";
import axios from "../utils/axios";
import { HiPlay } from "react-icons/hi";

function Home({ searchQuery = "" }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchBanner);
        const results = request.data?.results || [];

        // Filter to only items that HAVE a backdrop_path
        const moviesWithImages = results.filter((m) => m.backdrop_path);

        if (moviesWithImages.length > 0) {
          const randomIndex = Math.floor(Math.random() * moviesWithImages.length);
          setMovie(moviesWithImages[randomIndex]);
        }
      } catch (error) {
        console.error("Banner fetch error:", error);
      }
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="bg-black min-h-screen pt-16">
      {/* Hero Banner Section */}
      <header
        className="relative h-448px bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: movie?.backdrop_path
            ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`
            : "none",
          backgroundColor: "#111",
        }}
      >
        <div className="ml-8 pt-36 h-48">
          <h1 className="text-3xl md:text-5xl font-extrabold pb-1">
            {movie?.title || movie?.name || movie?.original_name || ""}
          </h1>

          <div className="flex gap-3 my-4">
            <button className="px-6 py-2 flex gap-2 items-center bg-white text-black font-bold rounded transition cursor-pointer hover:bg-white/80">
              <HiPlay className="text-3xl" />
              <span>Play</span>
            </button>
            <button className="px-8 py-2 bg-zinc-800/70 hover:bg-white hover:text-black text-white font-bold rounded transition cursor-pointer">
              My List
            </button>
          </div>

          <p className="w-45rem max-w-[80vw] text-sm md:text-base h-80px">
            {truncate(movie?.overview, 150)}
          </p>
        </div>

        {/* Bottom Fade */}
        <div className="h-[7.4rem] bg-linear-to-t from-black via-transparent to-transparent absolute bottom-0 w-full" />
      </header>

      {/* Movie Rows */}
      <div className="pb-12">
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
          searchQuery={searchQuery}
        />
        <Row
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          searchQuery={searchQuery}
        />
        <Row
          title="Top Rated"
          fetchUrl={requests.fetchTopRated}
          searchQuery={searchQuery}
        />
        <Row
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
          searchQuery={searchQuery}
        />
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          searchQuery={searchQuery}
        />
        <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
          searchQuery={searchQuery}
        />
        <Row
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
          searchQuery={searchQuery}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Home;