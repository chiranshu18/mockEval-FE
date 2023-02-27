import React from 'react'
import './allGenres.css'
import iconGrid from '../../assets/icon-grid.svg'
import Genres from '../../components/genres/Genres'
import { Link } from 'react-router-dom'

const allGenres = () => {
  return (
    <div className='allGenres-page-padding allGenres-content-div'>

      <div className='allGenres-heading'>
        <h1>genres</h1>
        <Link to='../allSongs'> <img src={iconGrid} alt="icon-genre" />  </Link>
      </div>

      <Genres />
      
    </div> 
  )
}

export default allGenres