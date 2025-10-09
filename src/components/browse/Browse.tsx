import React from 'react'
import { useAppSelector } from '../../store/hooks'
import Header from '../Header';
import VideoContainer from './VideoContainer';
import MovieList from './MovieList';
import UserGreeting from './UserGreeting';
import useNowPlayingMovie from '../../hooks/useNowPlayingMovie';

const Browse = () => {
  useNowPlayingMovie();
  const movies = useAppSelector((store) => store.movie.nowPlayingmovie)

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <VideoContainer />
      <UserGreeting />
      <MovieList title="Now Playing" movies={movies} />
    </div>
  )
}

export default Browse
