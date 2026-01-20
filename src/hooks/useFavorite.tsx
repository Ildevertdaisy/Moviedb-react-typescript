import {useState, useEffect} from 'react';
import Movie from '../types/movie';

// Clé pour stoker les favoris dans le localStorage
const FAVORITES_KEY = 'moviedb-favorites';

export function useFavorites() {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    //  Au chargement, on récupère les favoris diu localStorage
    useEffect(() => {
        const stored = localStorage.getItem(FAVORITES_KEY);
        if (stored) {
            setFavorites(JSON.parse(stored))
        }
    }, []);

    // Fnction pour ajouer un film aux favoris
    const addFavorite = (movie: Movie) => {
        const newFavorites = [...favorites, movie];
        setFavorites(newFavorites);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    } 

    // Fontion pour etirer un film des des favoris
    const removeFavorite = (movieId: number) => {
        const newFavorites = favorites.filter((movie) => movie.id !== movieId);
        setFavorites(newFavorites);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    }

    // Fontionnn pour vérifier si un film est dans les favoris 
    const isFavorite = (movieId: number) : boolean => {
        return favorites.some((movie) => movie.id == movieId)
    }
    
    // Fonction pou basculer (ajouter ou retirer
    const toggleFavorite = (movie : Movie) => {
        if (isFavorite(movie.id)) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    }

    return {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite
    };
}