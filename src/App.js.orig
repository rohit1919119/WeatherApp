// import logo from './logo.svg';
import './App.css';
import Weather from './components/WEATHER';
import React, { useState } from 'react';
import FRONTPAGE from './components/FRONTPAGE';
import ERROR from './components/ERROR';

const api = {
  key: "4ee7f25342979a8311be40961af3300f",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (evt, e) => {
    e.preventDefault();
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  }

  const searchb = (e) => {
    e.preventDefault();
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
      });
  }

  return (
    // <div className="App">
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="/">sHoW wEaThEr</a>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">

    //         <form className="d-flex">
    //           <input
    //             className="form-control me-2"
    //             type="text"
    //             placeholder="Your City"
    //             aria-label="Search"
    //             onChange={e => setQuery(e.target.value)}
    //             value={query}
    //             onKeyPress={(e) => search}
    //           />
    //           <button
    //             className="btn btn-outline-success"
    //             onClick={searchb}
    //           >Search
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
    //   <div>
    //     {(typeof weather.main != "undefined") ? (
    //       <Weather weathers={weather} />
    //     ) : (
    //       <div>
    //         <ERROR />
    //       </div>
    //     )}
    //   </div>
    // </div>
  <FRONTPAGE />
  );
}

export default App;
