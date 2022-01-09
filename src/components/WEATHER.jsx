// import react from "react";
import Sunny from '../sun.png';
import {useEffect, useState} from 'react'

function Weather({weathers}){

    const [convert, setConvert] = useState(Boolean)
    const [fade, setFade] = useState(Boolean)

    const conversion = () => {
        if (convert === false) {
            setFade(true)
            setTimeout(() => {
                setConvert(true)
            }, 100)
            
        } 
        if (convert === true) {
            setFade(false)
            setTimeout(() => {
                setConvert(false)
            }, 100)
        }       
        // console.log(convert)
    }

    const dateBuilder = (d) => {
        let months = ["January", "Feburuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }


    return(
            <div className="weather-container">
                <div className="weatherMainCard">
                    <div className="weatherCard1">
                        <div className="countryName">
                            <div className="state">{weathers.name}, {weathers.sys.country}</div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                        
                        <div className="weatherName">
                            
                            <div className="weatherType">
                                <img className="weatherImage" src={`http://openweathermap.org/img/wn/${weathers.weather[0].icon}@2x.png`} alt="" />
                            </div>
                            <div className="degree">
                                {convert === true ?
                                    <div className={`fahrenheit ${fade ? 'show-it' : 'hide-it'}`}>{Math.round(weathers.main.temp * 1.8) + 32} &#8457;</div>
                                 :                                 
                                    <div className={`celsius ${fade ? 'show-it' : 'hide-it'}`}>{Math.round(weathers.main.temp)} &#8451;</div>
                                 }  
                            
                               
                            </div>
                            

                        </div>
                        <button className='convertbtn' onClick={() => conversion()}>{convert ? 'Celsius' : 'Fahrenheit'}</button>
                    </div>

                    <div className="line">

                    </div>


                <div className="weatherDetails">
                    <div className="weatherTitle">{weathers.weather[0].description}</div>


                   

                    <div className="windContainer">

                    <div className="wind">
                        <p>wind </p>
                        <div className="windSpeed">
                        <p>{Math.round(weathers.wind.speed)}</p>
                        
                        </div>
                        <p>m/s</p>

                    </div>
                    <div className="wind">
                        <p>humidity</p>
                        <div className="windSpeed">
                        <p>{weathers.main.humidity}</p>
                        
                        </div>
                        <p>%</p>

                    </div>
                    <div className="wind">
                        <p>pressure</p>
                        <div className="windSpeed">
                        <p>{weathers.main.pressure}</p>
                        
                        </div>
                        <p>hPa</p>

                    </div>
                    </div>



                    <div className="windContainer">

                    <div className="wind">
                        <p>min. temp</p>
                        <div className="windSpeed">
                        <p>
                            {/* {Math.round(weathers.main.temp_min)} */}
                            {convert === true ?
                                    <div className={` ${fade ? 'show-it' : 'hide-it'}`}>{Math.round(weathers.main.temp_min * 1.8) + 32}</div>
                                 :                                 
                                    <div className={` ${fade ? 'show-it' : 'hide-it'}`}>{Math.round(weathers.main.temp_min)}</div>
                            }  
                        </p>
                        
                        </div>
                        {convert === true ?
                            <p>F</p>
                         :
                            <p>C</p>
                         }
                        

                    </div>
                    <div className="wind">
                        <p>max. temp</p>
                        <div className="windSpeed">
                        <p>
                            {/* {Math.round(weathers.main.temp_max)} */}
                            {convert === true ?
                                    <div className={` ${fade ? 'show-it' : 'hide-it'}`}>{Math.round(weathers.main.temp_max * 1.8) + 32}</div>
                                 :                                 
                                    <div className={` ${fade ? 'show-it' : 'hide-it'}`}>{Math.round(weathers.main.temp_max)}</div>
                            }  
                        </p>
                        
                        </div>
                        {convert === true ?
                            <p>F</p>
                         :
                            <p>C</p>
                         }

                    </div>
                    <div className="wind">
                        <p>cloudiness</p>
                        <div className="windSpeed">
                        <p>{weathers.clouds.all}</p>
                        
                        </div>
                        <p>%</p>

                    </div>
                    </div>

                    {/* <div className="skyContainer">
                    <div className="sky">
                        <p>sky</p>
                        <div className="skyDescription">
                        <p> clear</p>
                        </div>
                    </div>
                    </div> */}


                    </div>
                
                </div>

            </div>
    )
}

export default Weather;