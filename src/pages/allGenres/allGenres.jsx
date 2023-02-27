import React from 'react'
import './allGenres.css'
import iconGrid from '../../assets/icon-grid.svg'
import Genres from '../../components/genres/Genres'
import { Link } from 'react-router-dom'
import genre_cover_pop from '../../assets/genre-pop.png'
import genre_cover_bollywood from '../../assets/genre-bollywood.png'
import genre_cover_country from '../../assets/genre-country.png'
import genre_cover_rock from '../../assets/genre-rock.png'

import { GET_RECORDS } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';


const AllGenres = () => {

  const [songData, setSongData] = React.useState([]);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    makeRequest(GET_RECORDS)
    .then((response) => {
      setSongData(response.data)
    })
    .catch((e) => {
      setError(e.message)
    });
  }, []);

  if(error){
    return (
      <div >
        <p>{error}</p>
      </div>
    );
  }

  // console.log(songData);


  const pop = songData.filter((eachItem) => { return eachItem.genre.name === "Pop"})
  const bollywood = songData.filter((eachItem) => eachItem.genre.name === "Bollywood")
  const rock = songData.filter((eachItem) => eachItem.genre.name === "Rock")
  const country = songData.filter((eachItem) => eachItem.genre.name === "Country")

  

  return songData ? (

    <div className='allGenres-page-padding allGenres-content-div'>

      <div className='allGenres-heading'>
        <h1>genres</h1>
        <Link to='../allSongs'> <img src={iconGrid} alt="icon-genre" />  </Link>
      </div>


      <div className='genre-title'>
        <img src={genre_cover_pop} alt="genre cover" />
        <button className='genre-button'> <b>Pop</b> </button> 
      </div>

      <div className='genre-each-song'>
        {
          pop.map( (item) => { return <Genres item = {item}/> } )
        }
      </div>

      

      <div className='genre-title'>
        <img src={genre_cover_bollywood} alt="genre cover" />
        <button className='genre-button'> <b>Bollywood</b> </button> 
      </div>

      <div className='genre-each-song'>
      {
        bollywood.map( (item) => { return <Genres item = {item}/> } )
      }
      </div>


      <div className='genre-title'>
        <img src={genre_cover_country} alt="genre cover" />
        <button className='genre-button'> <b>Country</b> </button> 
      </div>


      <div className='genre-each-song'>
      {
        country.map( (item) => { return <Genres item = {item}/> } )
      }
      </div>
     

      <div className='genre-title'>
        <img src={genre_cover_rock} alt="genre cover" />
        <button className='genre-button'> <b>Rock</b> </button> 
      </div>


      <div className='genre-each-song'>
      {
        rock.map( (item) => { return <Genres item = {item}/> } )
      }
      </div>
    </div>

  ) : (
    <div className="songDataLoader">
      <p>Loading...</p>
    </div>
  )
}

export default AllGenres