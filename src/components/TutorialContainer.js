import React from 'react'
import Tutorial from './Tutorial'

const TutorialContainer = () => {
	return (
		<div className='tutorial_container'>
			<div className='tutorial_content'>
				<h2>Tutorial</h2>
				<h1>Let's look at 7 ways to use motion trend more effectively in the first tutorial.</h1>
				<a href='/*'>watch now</a>
			</div>

			<div className='video'>
				<video width="550" height="300" controls >
					<source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4"/>
				</video>
			</div>
			<Tutorial><Tutorial/></Tutorial>            
		</div>
	)
}

export default TutorialContainer