const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const requests={
  fetchBanner:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending:`/trending/all/day?api_key=${API_KEY}&language=en-US`, 
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchUpcomings:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchLatest:`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
}

export default requests;