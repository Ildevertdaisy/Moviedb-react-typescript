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
    <h1>Home</h1>
)
}

export default Home;