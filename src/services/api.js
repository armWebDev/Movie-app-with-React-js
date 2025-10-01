const API_KEY = "cbdcba90311e3efb738cc57ba424e6a7";

const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch popular movies");
  const data = await res.json();
  return data.results; 
}

export async function searchMovies(query) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error("Failed to search movies");
  const data = await res.json();
  return data.results;
}