import React from 'react'
import { Routes, Route} from 'react-router-dom'
import "@fontsource/montserrat";

import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail';
import Header from './components/Header';
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/movies' element={ <Home />} />
        <Route path='/movies/:id' element={<MovieDetail />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App