import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import MovieList from "./MovieList";
import { getMoviesByCategory, categories} from "../api/moviedb";

// import { useQuery } from '@tanstack/react-query';
function Home() {
const [selectedCategory, setSelectedCategory] = useState('popular');

const {data, isLoading, error} = useQuery({
    queryKey: ['movies',selectedCategory],
    queryFn: () => getMoviesByCategory(selectedCategory),
    staleTime: 5 * 60 * 1000 // Les données restent "fraîches" 5 minutes
});

return (
  <div>
     <h1 style={styles.container}>Découvrez les films</h1>
     <div style={styles.filters}>
        {categories.map((category) => (
            <button key={category.id} onClick={() => setSelectedCategory(category.id)}
            style={{
                ...styles.filterButon,
                backgroundColor: selectedCategory === category.id ? "#3498db" : '#2c2c2C'
            }}
            >
                {category.name}
            </button>
        ))}
     </div>

     {error && (
        <div style={styles.error}>
            Erreur lors du chargement des films
        </div>
     )}

     <MovieList movies={data?.results || []} isLoading={isLoading} />
  </div>
)
}

export default Home;

const styles = {
    container : {
       maxWidth: '1200px',
       margin: '0 auto',
       padding: '2rem 1rem'
    },
    title: {
    color: '#fff',
    fontSize: '2rem',
    marginBottom: '2rem',
    textAlign: 'center' as const, 
},
    filters: {
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap' as const,
        marginBottom: '2rem',
    },
    filterButon : {
       padding: '0.75rem 1.5rem',
       border: 'none',
       borderRadius: '25px',
       color: '#fff',
       cursor: 'pointer',
       fontSize: '0.95rem',
       fontWeight: 'bold',
       transition: 'all 0.3s'
    },
    error : {
        backgroundClor: '#e74c3c',
        color: '#fff',
        padding: '1rem',
        borderRadius: '4px',
        textAlign: 'center' as const,
        marginBottom: '2rem' 
    }
}