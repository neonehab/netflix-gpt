import React from 'react'
import { Movie } from '../../store/movieSlice'
import MovieCard from './MovieCard'

interface MovieListProps {
  title: string
  movies: Movie[]
}

const MovieList: React.FC<MovieListProps> = ({ title, movies }) => {
  if (movies.length === 0) return null

  return (
    <section className="px-4 py-6 md:px-12">
      <h2 className="mb-4 text-xl font-bold text-white md:text-2xl">{title}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}

export default MovieList
