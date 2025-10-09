import React from 'react'
import { Movie } from '../../store/movieSlice'

interface VideoComponent {
    movie: Movie
}

// jsonfakery.com has no trailer/videos endpoint, so the backdrop image is shown instead.
const VideoBackground: React.FC<VideoComponent> = ({ movie }) => {
    return (
        <div>{movie.original_title}
            <img
                src={movie.backdrop_path}
                alt={movie.original_title}
                className="w-full" />
        </div>
    )
}

export default VideoBackground
