import React, { useState } from 'react';
import Dog from "../pug1.png";
import './frontPage.css';
import ERROR from './ERROR';
import Weather from './WEATHER';

const api = {
  key: "4ee7f25342979a8311be40961af3300f",
  base: "https://api.openweathermap.org/data/2.5/"
}

function FrontPage(){

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (evt, e) => {
    // e.preventDefault();
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result)
        }
        )
        
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

    if (weather.cod === "404") {
      return(
      <div className="frontPage">

            <div className="welcome">
                <img className='welcomeImg1' src={Dog} alt="" />
                <span className="welcomeTitle">

                Hey Buddy, Welcome Here!
                </span>
            </div>

            <div class="input-group mb-3 frontSearch">
              <input 
               type="text"
               className="form-control inputSearch"
               id="inputSearch" 
               placeholder="Your City / Locality" 
               aria-label="Recipient's username" 
               aria-describedby="basic-addon2" 
               onChange={e => setQuery(e.target.value)}
               value={query}
               onKeyPress={search} 
              />
              <div class="input-group-append">
                <button 
                  class="btn btn-outline-secondary btnbtn" 
                  type="button"
                  onClick={searchb}
                  >Search</button>
              </div>
            </div>
            <div>
              {(typeof weather.main != "undefined") ? (
                <Weather weathers={weather} />
                  ) : (
              <div>
                <ERROR/>
              </div>
              )}
            </div>

            

        </div>
      )

        
    
    }
      else {
      return (
        <div className="frontPage">

            <div className="welcome">
                <img className='welcomeImg1' src={Dog} alt="" />
                <span className="welcomeTitle">

                Hey Buddy, Welcome Here!
                </span>
            </div>

            <div class="input-group mb-3 frontSearch">
              <input 
               type="text"
               className="form-control inputSearch"
               id="inputSearch" 
               placeholder="Your City / Locality" 
               aria-label="Recipient's username" 
               aria-describedby="basic-addon2" 
               onChange={e => setQuery(e.target.value)}
               value={query}
               onKeyPress={search} 
              />
              <div class="input-group-append">
                <button 
                  class="btn btn-outline-secondary btnbtn" 
                  type="button"
                  onClick={searchb}
                  >Search</button>
              </div>
            </div>
            <div>
              {(typeof weather.main != "undefined") ? (
                <Weather weathers={weather} />
                  ) : (
              <div>
                
              </div>
              )}
            </div>

            

        </div>
        

        
    )
}
}

export default FrontPage;