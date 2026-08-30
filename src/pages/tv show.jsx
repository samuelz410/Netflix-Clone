import React from "react";
import Header from "../components/header";
import Footer from '../components/footer';
import Row from "../components/row";
import requests from "../utils/request";

function TVShows({ searchQuery = "" }) {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main className="pt-20 pb-12">
        <h1 className="text-3xl font-bold text-white ml-4 md:ml-8 mb-4">TV Shows</h1>
        <Row
          title="Netflix Series Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
          searchQuery={searchQuery}
        />
        <Row
          title="Trending TV Shows"
          fetchUrl={requests.fetchTrending}
          searchQuery={searchQuery}
        />
        <Row
          title="Top Rated Series"
          fetchUrl={requests.fetchTopRated}
          searchQuery={searchQuery}
        />
      </main>
      <Footer />
    </div>
  );
}

export default TVShows;