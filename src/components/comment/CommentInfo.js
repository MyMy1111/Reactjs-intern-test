import React from 'react'
import Avatar from '../Avatar'
import Button from '../Button'

const CommentInfo = ({movie}) => {
	return (
			<div className='comment_info'>
				<div className='movie_author'>
						<p>Owner</p>
						<div className='avatar'>
							<Avatar src={movie.small_cover_image} size={'small-avatar'} />

							<div className='detail'>
									<h4>{movie.title}</h4>
									<div className='time'>
											<i className="fa fa-calendar" style={{'color': '#CCC8C6'}} />
											<p>{movie.year}</p>
									</div>
							</div>
						</div>
				</div>

				<div className='movie_small_detail'>
					<h3>{movie.slug}</h3>

					<h3 className='movie_icon'>					
							<i className="fa fa-heart" >{movie.runtime}</i>
							<i className="fa fa-eye">{movie.year}</i>
							<i className="fa fa-users">{movie.year}</i>
					</h3>
					
					<p style={{'color': '#CCC8C6'}}>Publishing date : <span> {movie.date_uploaded}</span></p>
				</div>

				<div className='creative'>
					<p style={{'color': '#CCC8C6', 'marginBottom': '1em'}}>Creative field</p>
					<div className='button_creative'>
						<Button background={'#000000'} content={'Premiere'} color={'#C6B8F5'} width={'90px'} height={'25px'}
						/>
						<Button background={'#000000'} content={'Photoshop'} color={'#245FC5'} width={'100px'} height={'25px'}/>
						<Button background={'#000000'} content={'Illustrator'} color={'#FA7B26'} width={'90px'} height={'25px'}/>
					</div>
				</div>

				<div className='movie_category'>
					<Button background={'#FFFFFF'} content={'Editing'} color={'#FF5500'} height={'30px'} />
					<Button background={'#FFFFFF'} content={'Camera action, Angle'} color={'#FF5500'} height={'30px'} />
					<Button background={'#FFFFFF'} content={'Sound, Beat'} color={'#FF5500'} height={'30px'} />
					<Button background={'#FFFFFF'} content={'Graphical'} color={'#FF5500'} height={'30px'} />
					<Button background={'#FFFFFF'} content={'Expreimental'} color={'#FF5500'} height={'30px'} />
					<Button background={'#FFFFFF'} content={'Editing'} color={'#FF5500'} height={'30px'} />
				</div>

				<div className='movie_report'>
					<Button icon={'fa fa-minus-circle'} background={'#FFFFFF'} content={'Report'} color={'#000000'} height={'40px'} width={'100%'} />
				</div>
			</div>	
	)
}

export default CommentInfo