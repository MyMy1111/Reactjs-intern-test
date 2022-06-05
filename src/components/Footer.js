import React from 'react'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='contact'>
				<div className='detail'>
					<h3>Contact</h3>
					<p>motiontrend@test.com</p>
				</div>

				<div className='social_media'>
					<span>@ Motiontrend. All rights reserved </span>

					<div className='icon'>
					<i className="fa fa-instagram"></i>
					<i className="fa fa-facebook"></i>
					<i className="fa fa-youtube-square"></i>
					</div>					
				</div>				
			</div>

			<div className='motionTrend'>
				<div className='motionTrend_info'>
					<span className='line'>Introduction</span>
					<span className='line'>Terms of Service</span>
					<select className='line' name="language" id="language">
						<option value="Language">Language</option>
						<option value="Korean">Korean</option>						
						<option value="English">English</option>						
					</select>
					<span>Customer of Service</span>
				</div>

				<div className='logo'>
					<h2>|\\| Motio\Tre\d</h2>				
				</div>
			</div>
		</div>
	)
}

export default Footer
