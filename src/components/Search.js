import React from 'react'

const search = () => {
	return (
		<div className='search_form'>      
      <form >
        <input type='text' name='search' id='search' required placeholder='Search your motion trend......' 
        style={{'background': '#FFFFFF !important'}}/>
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
	)
}

export default search