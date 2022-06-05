import React from 'react'

const Tutorial = ({children}) => {
	return (
		<div className='tutorial_movie'>
			<div className='tutorial_img'>
				<img src='https://yts.torrentbay.to/assets/images/movies/koshien_japans_field_of_dreams_2019/background.jpg' alt='https://yts.torrentbay.to/assets/images/movies/koshien_japans_field_of_dreams_2019/background.jpg'/>

				<div className='tutorial_info'>
					<h3>Tutorial</h3>
					<p>A tutorial video with Motion Trend. Let's Learn <br /> Motion Trends</p>
					
					<div className='tutorial_icon'>					
						<i className="fa fa-heart">18</i>
						<i className="fa fa-eye">18</i>
					</div>
				</div>
			</div>
			{ children }
			{ children }   
		</div>
	)
}

export default Tutorial