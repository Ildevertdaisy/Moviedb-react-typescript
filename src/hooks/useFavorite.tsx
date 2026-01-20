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

    //
    return null;
}