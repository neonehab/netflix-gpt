import React from 'react'
import { Movie } from '../../store/movieSlice'

interface MovieCardProps {
  movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const year = movie.release_date?.match(/\d{4}/)?.[0]

  return (
    <div className="group relative overflow-hidden rounded-md bg-zinc-900 shadow-md transition-transform duration-300 hover:z-10 hover:scale-105">
      <img
        src={movie.poster_path}
        alt={movie.original_title}
        loading="lazy"
        className="aspect-[2/3] w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="truncate text-sm font-semibold text-white">{movie.original_title}</h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-zinc-300">
          <span className="text-green-400">★ {movie.vote_average.toFixed(1)}</span>
          {year && <span>{year}</span>}
          <span className="uppercase">{movie.original_language}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
