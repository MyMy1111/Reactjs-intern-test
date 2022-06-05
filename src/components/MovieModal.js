import React, {useState, useEffect, useMemo} from 'react'
import Button from './Button'
import PictureInRow from './PictureInRow'
import axios from 'axios'
import Comment from './comment/Comment'
import ShareButton from './comment/ShareButton'
import Avatar from './Avatar'

const MovieModal = ({movie}) => {
	const [movies, setMovies] = useState([])
	const [open, setOpen] = useState(true)

  useEffect(() => {  
    axios.get('/movies')
  .then(res => setMovies(res.data))
  },[])

  const smallArr = useMemo(() => {
    const smallList = movies?.filter((movie, index) => index < 4)
    return smallList
  },[movies])
	return (
		<div className='movie_modal'>
			<a href='/' className='movie_close'  onClick={() => setOpen(prev => !prev)}>&#10006;</a>

			<div className='movie_menu'>
					<ShareButton content={'page'} icon={'fa fa-share-square-o'}/>
					<ShareButton content={'Like'} icon={'fa fa-heart'}/>
					<ShareButton content={'Add'} icon={'fa fa fa-fast-forward'}/>
					<ShareButton content={'share'} icon={'fa fa-share-alt'}/>
			</div>

			<div className='carousel'>
				<a href='/' className="prev">&#10094;</a>
				<a href='/' className="next">&#10095;</a>
			</div>

			{open && 
				<div className='modal_detail'>					
				<div className='movie'>
					<div className='info'>
						<Avatar src={movie.large_cover_image} size={'big-avatar'} />

						<div className='detail'>
							<h1>{movie.slug}</h1>
							<div className='title'>
								<p>{movie.title_long}</p>
								{movie.genres.map(((genre, index) => <p style={{'color':'#A9A9A9'}} key={index}>{genre}</p>))}							
							</div>

							<div>
								<Button content={'Like'}  background={'#FFFFFF'} icon={'fa fa-heart-o'} width={'140px'} height={'40px'} />
								<Button content={'follow'} color={'white'} background={'black'} icon={'fa fa-users'} width={'140px'} height={'40px'} />
								<Button content={'Add'} color={'white'} background={'black'} icon={'fa fa-fast-forward'} width={'140px'} height={'40px'} />
							</div>
						</div>
					</div>

					<div className='edit'>
						<div className='tag'>
							<h2>TZ</h2>
							<h2 style={{'background': 'blue'}}>HR</h2>
						</div>

						<Button content={'Edit project'}  background={'#FFFFFF'} width={'140px'} height={'40px'} />
					</div>
				</div>
				
				<div className='video_modal'>
					<video width="1460" height="1200" controls >
						<source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4"/>
					</video>

					<p style={{'padding': '50px 0'}}>{movie.description_full}</p>
				</div>

				<div className='image'>
					<img src={movie.background_image} alt='movie.background_image' />
					<img src={movie.background_image_original} alt='movie.background_image_original' />
					<img src={movie.background_image} alt='movie.background_image' />
					<img src={movie.background_image_original} alt='movie.background_image_original' />
				</div>

				<div className='movie_detail'>
					<h1>{movie.slug}</h1>

					<h3 className='movie_icon'>					
							<i className="fa fa-heart" >{movie.runtime}</i>
							<i className="fa fa-eye">{movie.year}</i>
							<i className="fa fa-users">{movie.year}</i>
					</h3>
					
					<p style={{'color': '#CCC8C6'}}>Publishing date : <span> {movie.date_uploaded}</span></p>

					<div>
					<Button content={'Like'}  background={'#FFFFFF'} icon={'fa fa-heart-o'} width={'140px'} height={'40px'} />						
					<Button content={'Add'} color={'white'} background={'black'} icon={'fa fa-fast-forward'} width={'140px'} height={'40px'} />
					</div>
				</div>

				<div className='movie_card' >
					<div className='movie_card_title'>
						<Avatar src={movie.medium_cover_image} size={'medium-avatar'} />

						<p>{movie.title}</p>
					</div>

					<div className='movie_card_detail'>
						<PictureInRow smallArr={smallArr}/>
					</div>
				</div>

				<div>
					<Comment movie={movie}/>
				</div>
			</div>
			}	
							
    </div>
	)
}

export default MovieModal