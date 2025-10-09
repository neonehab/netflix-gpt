import { useEffect } from "react";
import { MOVIES_API_URL } from "../utils/constant";
import { useAppDispatch } from "../store/hooks";
import { addMovie, PaginatedMoviesResponse } from "../store/movieSlice";

const useNowPlayingMovie = () => {
  const dispatch = useAppDispatch();
  const getMovieData = async () => {
    const response = await fetch(`${MOVIES_API_URL}/paginated?page=1`);
    const movieData: PaginatedMoviesResponse = await response.json();
    dispatch(addMovie(movieData.data));
  };

  useEffect(() => {
    getMovieData();
  }, []);
};

export default useNowPlayingMovie;
