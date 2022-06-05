import React from 'react'
import CommentInfo from './CommentInfo'
import CommentPost from './CommentPost'

const Comment = ({movie}) => {
	return (
		<div style={{'display': 'flex'}}>
			
			<CommentPost></CommentPost>
			<CommentInfo movie={movie} />
		</div>
	)
}

export default Comment