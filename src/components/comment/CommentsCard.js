import React from 'react'
import Avatar from '../Avatar'

const CommentsCard = ({ comment }) => {
	return (
		<div className='comments'>
			<div className='user_info'>
					<Avatar src={comment.small_cover_image} size={'small-avatar'} />
					<div className='user_name'>
							<p style={{'fontWeight': 'bold'}}>{comment.title}</p>
							<p style={{'color': '#CCC8C6'}}>{comment.date_uploaded}</p>
					</div>
			</div>

			<p style={{'fontSize': 'small'}}>{comment.description_full}</p>
		</div>
	)
}

export default CommentsCard