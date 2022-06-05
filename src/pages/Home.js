import React, { useState, useEffect, useMemo} from 'react'

import axios from 'axios'

import Categories from '../components/Categories'
import Movies from '../components/Movies'
import PictureInRow from '../components/PictureInRow'
import TutorialContainer from '../components/TutorialContainer'


const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {  
    axios.get('/movies')
  .then(res => setMovies(res.data))
  },[])

  
  const smallArr = useMemo(() => {
    const smallList = movies?.filter((movie, index) => index < 5)
    return smallList
  },[movies])
	return (
		<main>     
      <Categories />

      <div className='content'>
        <div className='sub_content'>
          <span>Motion Trend pick</span>
          <span>Latest</span>
          <span>Recommended</span>
        </div>

        <div style={{'fontSize': '0.9em'}}>
          Selection criteria
        </div>
      </div>
      <Movies movies={movies} />
        
      <TutorialContainer />
      <PictureInRow smallArr={smallArr}/>
    </main>
	)
}

export default Home