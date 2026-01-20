import axios from 'axios';
import  {Movie, MovieResponse} from '../types/movie'

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjUzYjgwMzIzOTE2ZjJiOTYyMmIwZjhkMGEwNTBmOCIsIm5iZiI6MTY3ODg4NzEwMS41ODgsInN1YiI6IjY0MTFjOGJkYjQyMjQyMDBmNzkxODU5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ew4HwkvNvzJAFxp0Qbp41bX5M0E7Mdat3N4D_cFZAoE";

const BASE_URL = "https://api.themoviedb.org/3";

//Configurtion d'Axios avec l'url de Base
export const movieApi = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: 'fr-FR'  // Pou avoi les infos en français 
    }
})

// URL pou les images
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// Fontion pour récupérer les films populaires 

export const getPopularMovies = async (
  page = 1,
): Promise<MovieResponse> => {
  const response = await movieApi.get("/movie/popular", {
    params: { page },
  });
  return response.data;
};

// Fonction pour récupérer les détails d'un film
export const getMovieDetails = async (movieId: number) : Promise<Movie> => {
    const response = await movieApi.get(`/movie/${movieId}`);
    return response.data;
}


export const getMoviesByCategory = async (category: string, page = 1) : Promise<MovieResponse> => {

  const response = await movieApi.get(`/movie/${category}`, {
    params: {page},
  });
  return response.data;
}
 
export const categories: Array<{ id: string; name: string }> = [
  {id: 'popular', name: 'populaires'},
   {id : 'top_rated', name: 'Mieux notés'}, 
   {id: 'upcoming', name: 'à venir'},
    {id: 'now_playing', name: 'Au cinéma'}
];

