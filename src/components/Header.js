import React from 'react'
import Search from './Search'

const Header = () => {
	return (
		<header>
      <nav>
        <input type='checkbox' id='chk1'></input>
        <div className='logo'>
          <h1>|\\| Motio\Tre\d</h1>				
        </div>

        <ul>
          <li><a href='/'>Discover</a></li>
          <li><a href='/'>Job</a></li>
          <Search />
          <li><a href='/'>Login</a></li>
          <li><a href='/'>Sign up</a></li>
        </ul>

        <div className='menu'>
          <label htmlFor='chk1'>
            <i className='fa fa-bars'></i>
          </label>            
        </div>
      </nav>      
    </header>
	)
}

export default Header