import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useAppSelector } from '../../store/hooks'

const VideoContainer = () => {
  const movies = useAppSelector((store) => store.movie?.nowPlayingmovie)
  if(movies.length == 0) return;
//   const [nowPlayingmovie, setNowPlayingmovie ] = useState();
//   const [randomItem, setRandomItem] = useState('');


    const popularMovie = movies.reduce((movie, currentItem) => {
        return currentItem.popularity > movie.popularity ?  currentItem : movie
    },movies[0])
    console.log(popularMovie);

  return (
    <div>
        <VideoBackground movie = {popularMovie}/>

        <VideoTitle></VideoTitle>
    </div>
  )
}

export default VideoContainer