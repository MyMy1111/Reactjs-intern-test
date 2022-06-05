import React, { useState, useRef } from 'react'

let listArr = ['Camera','Editing', 'Camera Action, Angle', 'Sound, Beat', 'Graphical', 'Experimental', 'Elements', 'Car', 'Gun', 'Metro']
const Categories = () => {
	// eslint-disable-next-line
	const [categories, setCategories] = useState(listArr)

	const btnRef = useRef()

	const slideLeft = () => {
		const btn = btnRef.current
		btn.scrollLeft = btn.scrollLeft - 250
	}

	const slideRight = () => {
		const btn = btnRef.current
		console.log(btn.scrollBehavior )
		btn.scrollLeft = btn.scrollLeft + 250
	}


	return (
		<div className="category_row">
			<button onClick={slideLeft} className="previous round">&#8249;</button>
			<button onClick={slideRight} className="next round">&#8250;</button>

			<div className='scrollMenu' ref={btnRef}>
				{
					categories.map((category, index) => (
						<div className="category" key={index}>
							<p className='text'>{category}</p>
						</div>
					))
				}
			</div>
			
		</div>
	)
}

export default Categories