import './App.css';
import Header from './components/header/header'
import Home from './pages/home/home';
import AllSongs from './pages/allSongs/AllSongs';
import AllGenres from './pages/allGenres/allGenres';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
    
      <Header/>   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/allsongs' element={<AllSongs />}/>
          <Route path='/allgenres' element={<AllGenres />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
