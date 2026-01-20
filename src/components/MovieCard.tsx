
import {Link} from '@tanstack/react-router';
import {Movie} from "../types/movie";
import { IMAGE_BASE_URL } from '../api/moviedb';
import { useFavorites } from '../hooks/useFavorite';

interface MoviecardPops {
    movie: Movie;
}


function MovieCard({movie} : MoviecardPops) {
    const {isFavorite, toggleFavorite} = useFavorites();
    const isInFavorites = isFavorite(movie.id);
    
    return (
      <div style={styles.card}>
        <Link to="/movie/$movieId" params={{ movieId: movie.id.toString() }}>
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            style={styles.poster}
          />
        </Link>

        <div style={styles.content}>
          <h3 style={}>{movie.title}</h3>

          <div style={styles.info}>
            <span>⭐ {movie.vote_average.toFixed(1)}</span>
            <span>{new Date(movie.realase_date).getFullYear()}</span>
          </div>

          <div style={styles.overview}>{movie.overview.substring(0, 100)}...</div>
          <button onClick={() => toggleFavorite(movie)} style={{
            ...styles.button,
            backgroundColor: isInFavorites  ? "#e74c3c": "#3498db"
          }}>
            {isInFavorites ? "❤️ Retirer" : "'🤍 Ajouter"}
          </button>
        </div>
      </div>
    );

}

export default MovieCard;

const styles = {
    card : {
        backgroundColor: "#2c2c2c",
        borderRadius: "8px",
        overflow: "hidden",
        tansition: "transform 0.3s",
        cursor: "pointer"
    },
    poster: {
        width: "100%",
        height: "300px",
        objectFit: "cover" as const,
    },
    content : {
        padding: "1rem"
    },
    title : {
        color: "#fff",
        fontSize: "1.1rem",
        marginBottom: "O.5rem"
    },
    info : {
        display: "flex",
        justifyContent: "spae-between",
        color: "#aaa",
        fontSize: "0.9rem",
        marginBottom: "0.5rem"
    },
    overview : {
        color: "#ccc",
        fontSize: "0.85rem",
        linHeight: "1.4",
        marginBottom : "1rem"
    },
    button : {
        witdh : "100%",
        padding: "0.5rem",
        border: "none",
        borderRadius: "4px",
        color: "#fff",
        cursor: "pointer",
        fontSize: "0.9rem",
        fontWeight: "bold"
    }
}