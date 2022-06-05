import React from 'react'
import { Link } from 'react-router-dom'

const MoviesCard = ({ movie }) => {
	return (
		<div className='card'>
      <Link to={`/movies/${movie.id}`}>
        <span /> 
        <img src={movie.background_image} alt={movie.background_image_original} />
      </Link>
      
      <div className="box">		
        <h5>
				<img className='avatar' src={movie.small_cover_image} alt={movie.small_cover_image} />
          <Link to={`/movies/${movie.id}`}>
						 {movie.title}
          </Link>
        </h5>
        
        <div className='icon_div'>					
						<i className="fa fa-heart">18</i>
						<i className="fa fa-eye">18</i>
        </div>
      </div>
    </div>
	)
}

export default MoviesCard