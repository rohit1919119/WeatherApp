import React, { useState } from 'react';
import Dog from "../pug1.png";
import './frontPage.css';
import ERROR from './ERROR';
import Weather from './WEATHER';
// import loadinggif from '../loading.gif'

const api = {
  key: "4ee7f25342979a8311be40961af3300f",
  base: "https://api.openweathermap.org/data/2.5/"
}

function FrontPage(){

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false);
  const [loading, setLoading] = useState(false)

  const search = (evt, e) => {
    // e.preventDefault();
    setLoading(true)
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          setLoading(false)
          // console.log(result)
        }
        )
        setShow(false);
        setShow2(true);
    }
  }

  const searchb = (e) => {
    e.preventDefault();
    setLoading(true)
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        setLoading(false)
      });

    setShow(false);
    setShow2(true);

    

    
    
    
  }

    
      return (
        <div className="frontPage">
          <div className="yoyo"   style={{ display: show ? "flex" : "none" }}>


                <div className="welcome">
                    <img className='welcomeImg1' src={Dog} alt="" />
                    <span className="welcomeTitle">
    
                    Hey Buddy, Welcome Here!
                    </span>
                </div>
    
                <div className="input-group mb-3 frontSearch">
                  <input 
                  autoComplete='off'
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
                  <div className="input-group-append">
                    <button 
                      className="btn btn-outline-secondary btnbtn" 
                      type="button"
                      onClick={searchb}
                      >Search</button>
                  </div>
                </div>
          </div>
          {/* <div>
              {(typeof weather.main != "undefined") ? (
                <Weather weathers={weather} />
                  ) : (
              <div>
               <ERROR />
              </div>
              )}
          </div> */}

            

          <div className="dd" style={{ display: show2 ? "block" : "none" }} >
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">sHoW wEaThEr</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Your City"
                  aria-label="Search"
                  onChange={e => setQuery(e.target.value)}
                  value={query}
                  onKeyPress={(e) => search}
                />
                <button
                  className="btn btn-outline-success"
                  onClick={searchb}
                >Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div>
              
                  {(typeof weather.main != "undefined") ? (
                    <Weather weathers={weather} />
                      ) : (
                      <div> 
                          {(loading === true && weather.main !== "undefined") ? (
                          <div>
                            <div className='loading'>Loading</div>
                            {/* <img src={loadinggif} alt="Loading" /> */}
                            {console.log(loading)}
                          </div>  
                              ) : (
                          <div>
                             <ERROR />
                          </div>
                                )}
                      </div>
                  )}
               
              {/* {(typeof weather.main != "undefined") ? (
                <Weather weathers={weather} />
                  ) : (
              <div>
               <ERROR />
              </div>
              )} */}
          </div>
          </div>
        </div>
        

        
    )
}


export default FrontPage;