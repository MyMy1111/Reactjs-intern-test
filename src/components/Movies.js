import React from 'react'
import MoviesCard from './MoviesCard'

const Movies = ({ movies}) => {
	
	return (
		<div className='movies'>
			{
				movies?.map(movie => (
					<MoviesCard key={movie.id} movie={movie} />
				))
			}
		</div>
	)
}

export default Movies