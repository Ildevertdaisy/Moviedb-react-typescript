import { Movie } from "../types/movie";
import MovieCard from "./MovieCard";

interface MovieListProps {
    movies: Movie[],
    isLoading?: boolean 
}

function MovieList({movies, isLoading} : MovieListProps) {
    if (isLoading) {
        return (
            <div style={styles.loading}>
                <p>Chargement des films.....</p>
            </div>
        );
    }

    if (movies.length === 0) {
        return (
            <div style={styles.empty}>
                <p>Aucun film trouvé</p>
            </div>
        );
    }

    return (
        <div style={styles.grid}>
             {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>
             ))}
        </div>
    );
}

export default MovieList;

const styles = {
    grid: {
        display: 'grid',
        gridTemplateClumns: 'repeat(auto-fill, minmax(250px 1fr))',
        gap: '2rem',
        padding: '2rem 0',
    },
    loading : {
        textAlign: 'center' as const,
        padding: '4rem',
        color: '#fff',
        fontSize: '1.2rem'
    },
    empty : {
        textAlign: 'center' as const,
        padding: '4rem',
        colo: '#aaa',
        fontSize: '1.2rem'
    }
};