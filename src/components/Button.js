import React from 'react'

const Button = ({ background, color, content, icon, width, height}) => {
	return (
		<>
			<button style={{
				'width': `${width}`, 'height': `${height}`, 'margin': `0.2em`,'borderStyle': `solid`,
				'background': `${background}`, 'color': `${color}`, 'borderColor': `${color}`,'borderWidth': '1px',
				'fontWeight': 'bold', 'cursor': 'pointer', 'padding': '0 5px 0 0' 
				}}>
				<i className={`${icon}`} style={{'marginRight': '0.5em'}}></i>
				{content}
			</button>
		</>
	)
}

export default Button