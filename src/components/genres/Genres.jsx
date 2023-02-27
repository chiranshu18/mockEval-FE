import React from 'react'
import './Genres.css'
import heartGray from '../../assets/heart-gray.svg'


const Genres = ({item}) => {
  return (
    // <div>

    //   <div className='genre-title'>
    //     <img src={genre_cover} alt="genre cover" />
    //     <button className='genre-button'> <b>genre name</b> </button> 
    //   </div>

    //   <div className='genre-each-song'>


    //     <div className='genre-song-card'>
    //       <div className='genre-song-img'>
    //         <img src={cover} alt="song cover" />
    //       </div>

    //       <div className='genre-details'>

    //         <div className='genre-description'>
    //           <div className='genre-song-name'> <p>In the End</p> </div>
    //           <div className='genre-song-artist'> <h4>Linkin park</h4> </div>
    //         </div>

    //         <div className='genre-engagement'>
    //           <img src={heartGray} alt="icon-genre" />

    //         </div>

    //       </div>
    //     </div>

    //     <div className='genre-song-card'>
    //       <div className='genre-song-img'>
    //         <img src={cover} alt="song cover" />
    //       </div>

    //       <div className='genre-details'>

    //         <div className='genre-description'>
    //           <div className='genre-song-name'> <p>In the End</p> </div>
    //           <div className='genre-song-artist'> <h4>Linkin park</h4> </div>
    //         </div>

    //         <div className='genre-engagement'>
    //           <img src={heartGray} alt="icon-genre" />

    //         </div>

    //       </div>
    //     </div>

    //     <div className='genre-song-card'>
    //       <div className='genre-song-img'>
    //         <img src={cover} alt="song cover" />
    //       </div>

    //       <div className='genre-details'>

    //         <div className='genre-description'>
    //           <div className='genre-song-name'> <p>In the End</p> </div>
    //           <div className='genre-song-artist'> <h4>Linkin park</h4> </div>
    //         </div>

    //         <div className='genre-engagement'>
    //           <img src={heartGray} alt="icon-genre" />

    //         </div>

    //       </div>
    //     </div>

    //     <div className='genre-song-card'>
    //       <div className='genre-song-img'>
    //         <img src={cover} alt="song cover" />
    //       </div>

    //       <div className='genre-details'>

    //         <div className='genre-description'>
    //           <div className='genre-song-name'> <p>In the End</p> </div>
    //           <div className='genre-song-artist'> <h4>Linkin park</h4> </div>
    //         </div>

    //         <div className='genre-engagement'>
    //           <img src={heartGray} alt="icon-genre" />

    //         </div>

    //       </div>
    //     </div>

    //     <div className='genre-song-card'>
    //       <div className='genre-song-img'>
    //         <img src={cover} alt="song cover" />
    //       </div>

    //       <div className='genre-details'>

    //         <div className='genre-description'>
    //           <div className='genre-song-name'> <p>In the End</p> </div>
    //           <div className='genre-song-artist'> <h4>Linkin park</h4> </div>
    //         </div>

    //         <div className='genre-engagement'>
    //           <img src={heartGray} alt="icon-genre" />

    //         </div>

    //       </div>
    //     </div>

    //     <div className='genre-song-card'>
    //       <div className='genre-song-img'>
    //         <img src={cover} alt="song cover" />
    //       </div>

    //       <div className='genre-details'>

    //         <div className='genre-description'>
    //           <div className='genre-song-name'> <p>In the End</p> </div>
    //           <div className='genre-song-artist'> <h4>Linkin park</h4> </div>
    //         </div>

    //         <div className='genre-engagement'>
    //           <img src={heartGray} alt="icon-genre" />

    //         </div>

    //       </div>
    //     </div>

        
    //   </div>

      

      

      

      

    // </div>

    <div>
      


        <div className='genre-song-card'>
          <div>
            <img className='genre-song-img' src={item.imageUrl} alt="song cover" />
          </div>

          <div className='genre-details'>
            <div className='genre-description'>
              <div className='genre-song-name'> <p>{item.name}</p> </div>
              <div className='genre-song-artist'> <h4>{item.artist.name}</h4> </div>
            </div>

            <div className='genre-engagement'>
              <img src={heartGray} alt="icon-genre" />
            </div>
          </div> 
        </div>

      </div>

  )
}

export default Genres