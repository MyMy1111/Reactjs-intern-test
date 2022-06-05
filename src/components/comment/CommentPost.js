import React, {useState, useEffect, useRef, useCallback} from 'react'
import CommentsCard from './CommentsCard'
import axios from 'axios'

const CommentPost = () => {
	const [comments, setComments] = useState([])
	// eslint-disable-next-line
	const [limit, setLimit] = useState(5)
	const [page, setPage] = useState(1)
	const [stop, setStop] = useState(false)

	const btnRef = useRef()


  useEffect(() => {  
    axios.get(`/movies?_page=${page}&_limit=${limit}`)
  .then(res => {
		if(res?.data) {
			setComments(prev => [...prev, ...res.data])

			if(res.data.length < limit) setStop(true)
		}
	})
  },[limit, page])

	const handleLoadMore = useCallback(() => {
		if(stop) return;
		setPage(prev => prev + 1)
	}, [stop])

	useEffect(() => {
		const btn = btnRef.current

		const observer = new IntersectionObserver(entries => {
			if(entries[0].isIntersecting) {
				handleLoadMore()
			}
		})

		if(btn) observer.observe(btn)

		return () => {
			observer.unobserve(btn)
		}
	}, [btnRef, handleLoadMore])

	return (
		<div className='comment'>
			<h2>Comments</h2>

			<div className='comment_post'>
				<input type='text'   placeholder='Write a comment now......'/>
					<button type="submit">
						<i className="fa fa-arrow-right"></i>
					</button>
			</div>
			
			{
				comments?.map(comment => (
					<CommentsCard key={comment.id} comment={comment}/>
				))
			}
			<div id='button'>
				<button style={{'width': '100%'}}			
						onClick={() => setPage(prev => prev + 1)}
						disabled={stop} ref={btnRef}
					>More comment <i className='fa fa-arrow-down'/>
				</button>
			</div>
		</div>
	)
}

export default CommentPost