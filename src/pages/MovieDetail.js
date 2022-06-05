import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import MovieModal from '../components/MovieModal'

const MovieDetail = () => {
	const { id } = useParams()
	const [movie, setMovie] = useState()

	useEffect(() => {
		axios.get(`/movies/${id}`)
		.then(res => setMovie(res.data))
	}, [id])

	return (
		<div>
				{
					movie && <MovieModal movie={movie} />
				}
		</div>
	)
}

export default MovieDetail