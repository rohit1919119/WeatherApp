import react from "react";
import Sunny from '../sun.png';

function Weather({weathers}){



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
                                <img className="weatherImage" src={Sunny} alt="" />
                            </div>
                            <div className="degree">
                                {Math.round(weathers.main.temp)}
                            &#8451;
                            </div>

                        </div>
                    </div>

                    <div className="line">

                    </div>


                <div className="weatherDetails">
                    <div className="weatherTitle">what a sunny day!</div>


                   

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
                        <p>{Math.round(weathers.main.temp_min)}</p>
                        
                        </div>
                        <p>C</p>

                    </div>
                    <div className="wind">
                        <p>max. temp</p>
                        <div className="windSpeed">
                        <p>{Math.round(weathers.main.temp_max)}</p>
                        
                        </div>
                        <p>C</p>

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