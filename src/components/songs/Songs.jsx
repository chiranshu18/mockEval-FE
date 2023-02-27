import React from 'react'
import heartGray from '../../assets/heart-gray.svg'
import './songs.css'



const Songs = ({item}) => {


  return (

        <div className='song-card'>

          <div>
            <img className='song-img' src={item.imageUrl} alt="song cover" />
          </div>

          <div className='details'>

            <div className='description'>
              <div className='song-name'> <p>{item.name}</p> </div>
              <div className='song-artist'> <h4>{item.artist.name}</h4> </div>
            </div>

            <div className='engagement'>
              <img src={heartGray} alt="icon-genre" />
            </div>

          </div>
        </div>

  )
}


export default Songs


