import React from "react";
import Header from "../components/header";
import Footer from '../components/footer';
import Row from "../components/row";
import requests from "../utils/request";

function Movies({ searchQuery = "" }) {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main className="pt-20 pb-12">
        <h1 className="text-3xl font-bold text-white ml-4 md:ml-8 mb-4">Movies</h1>
        <Row
          title="Top Rated Blockbusters"
          fetchUrl={requests.fetchTopRated}
          isLargeRow
          searchQuery={searchQuery}
        />
        <Row
          title="Action Hits"
          fetchUrl={requests.fetchActionMovies}
          searchQuery={searchQuery}
        />
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          searchQuery={searchQuery}
        />
        <Row
          title="Horror & Thrillers"
          fetchUrl={requests.fetchHorrorMovies}
          searchQuery={searchQuery}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;