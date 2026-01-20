

export interface Movie {
    id: number;
    title : string;
    overview : string;
    poster_path: string;
    backdrop_path : string;
    realase_date : string;
    vote_average : number;
    vote_count : number;
}

export interface MovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface MovieCategory {
    id: string;
    name: string;
}