import React from 'react'
import MoviesCard from './MoviesCard'

const PictureInRow = ({ smallArr }) => {
	return (
		<div className='movies'>
			{
				smallArr?.map(movie => (
					<MoviesCard key={movie.id} movie={movie} />
				))
			}
		</div>
	)
}

export default PictureInRow