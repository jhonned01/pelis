const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=es-MX`,
  },

  fetchTopRate: {
    title: "Top Rate",
    url: `/movie/top_rated?api_key=${API_KEY}&language=es-MX`,
  },
  fetchActionMovies: {
    title: "Acción",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=es-MX`,
  },
  fetchBelicas: {
    title: "Bélica",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10752&language=es-MX`,
  },
  fetchCrimen: {
    title: "Crimen",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=80&language=es-MX`,
  },

  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=es-MX`,
  },
  fetchAnimation: {
    title: "Animación",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=es-MX`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=es-MX`,
  },
  fetchMystery: {
    title: "Misterio",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=es-MX`,
  },
  fetchComedyMovies: {
    title: "Comedia",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=es-MX`,
  },

  fetchTv: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=es-MX`,
  },
};
