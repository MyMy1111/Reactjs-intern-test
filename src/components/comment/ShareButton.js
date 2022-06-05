import React from 'react'

const ShareButton = ({ icon, content}) => {
	return (
		<div className='button_share'>
			<i className={`${icon}`}></i>
			<p>{content}</p>
		</div>
	)
}

export default ShareButton