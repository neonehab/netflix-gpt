import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Shapes match the jsonfakery.com movies API (https://jsonfakery.com/movies/paginated)

export interface Cast {
    id: string,
    movie_id: number,
    name: string,
    original_name: string,
    popularity: string,
    profile_path: string | null,
    character: string,
    created_at: string | null,
    updated_at: string | null
}

export interface Movie {
    id: string,
    movie_id: number,
    original_title: string,
    original_language: string,
    overview: string,
    popularity: number,
    poster_path: string,
    backdrop_path: string,
    release_date: string,
    vote_average: number,
    vote_count: number,
    adult: number,
    created_at: string | null,
    updated_at: string | null,
    casts: Cast[]
}

export interface PaginationLink {
    url: string | null,
    label: string,
    active: boolean
}

export interface PaginatedMoviesResponse {
    current_page: number,
    data: Movie[],
    first_page_url: string,
    from: number,
    last_page: number,
    last_page_url: string,
    links: PaginationLink[],
    next_page_url: string | null,
    path: string,
    per_page: number,
    prev_page_url: string | null,
    to: number,
    total: number
}

interface MovieState {
    nowPlayingmovie: Movie[];
    loading: boolean;
    error: string | null;
}

const initialState: MovieState = {
    nowPlayingmovie: [],
    loading: false,
    error: null,
};


const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<Movie[]>) => {
            state.nowPlayingmovie = action.payload
        }
    }
})

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;
