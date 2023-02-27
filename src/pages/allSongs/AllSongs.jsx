import React from 'react';
import './allSongs.css';
import iconGenre from '../../assets/icon-genre.svg';
import Songs from '../../components/songs/Songs';
import { Link } from 'react-router-dom';

import { GET_RECORDS } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';


const AllSongs = () => {

  const [songData, setSongData] = React.useState();
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

  console.log(songData);

  return songData ? (

    <div className='page-padding content-div'>

      <div className='heading'>
        <h1>all songs</h1>
        <Link to='../allGenres' > <img src={iconGenre} alt="icon-genre" /> </Link> 
      </div>

      <div className='each-song'>
      {
        songData.map( (item) => {return  <Songs key = {item.id} item = {item}/>} )
      }
      </div>
    
    </div>    

  ) : (
    <div className="songDataLoader">
      <p>Loading...</p>
    </div>
  )

}

export default AllSongs