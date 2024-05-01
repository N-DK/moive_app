import axios from "axios";

const apiKey = "e9e9d8da18ae29fc430845952232787c";
const apiBaseUrl = "https://api.themoviedb.org/3";
const trendingMovie = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMovie = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMovie = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;

const apiCall = async (url, params) => {
  const options = {
    method: "GET",
    url,
    params: params ? params : {},
  };
  try {
    const res = await axios.request(options);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTrendingMovie = () => {
  return apiCall(trendingMovie);
};
export const fetchUpcomingMovie = () => {
  return apiCall(upcomingMovie);
};
export const fetchTopRatedMovie = () => {
  return apiCall(topRatedMovie);
};
export const fetchCast = (id) => {
  return apiCall(`${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`);
};
export const fetchSimilarMovie = (id) => {
  return apiCall(`${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`);
};
export const fetchMovie = (id) => {
  return apiCall(`${apiBaseUrl}/movie/${id}?api_key=${apiKey}`);
};
export const fetchPerson = (id) => {
  return apiCall(
    `${apiBaseUrl}/person/${id}?api_key=${apiKey}&append_to_response=combined_credits`
  );
};
export const fetchSearch = (text) => {
  return apiCall(
    `${apiBaseUrl}/search/movie?api_key=${apiKey}&page=1&query=${text}`
  );
};
