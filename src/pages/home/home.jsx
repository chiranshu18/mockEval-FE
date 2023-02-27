import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div>
        <div className='home-text'>
            <p>:((</p>
            <br />
            <p>seems a bit empty in here</p>
            <br />
            <Link to='/allsongs'> <button className='sync-button'> <b>sync</b> </button> </Link> 
        </div>

    </div>
  )
}

export default home