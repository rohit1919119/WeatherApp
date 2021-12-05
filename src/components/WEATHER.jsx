import react from "react";
import Sunny from '../sun.png';

function weather(){
    return(
        <div className="weather-container">
            <div className="weatherMainCard">
                <div className="weatherCard1">

                    <div className="countryName">
                        
                        <div className="state">Toronto, Canada</div>
                        <div className="date">Sunday, December 5</div>
    
                    </div>
                    
                    <div className="weatherName">
                        
                        <div className="weatherType">
                            <img src={Sunny} alt="" />
                        </div>
                        <div className="degree">
                        50 &#8451;
                        </div>

                    </div>
                </div>

                <div className="line">

                </div>


                <div className="weatherDetails">
                    <div className="weatherTitle">Sunny</div>
                    <div className="latContainer">

                    <div className="latitude">
                        <p>latitude</p>
                        <div className="latVal">
                        <p>37.8</p>
                        </div>
                    </div>
                    </div>

                    <div className="lonContainer">

                    <div className="longitude">
                        <p>longitude</p>
                        <div className="lonVal">
                        <p>- 19.08</p>
                        </div>

                    </div>
                    </div>

                    <div className="windContainer">

                    <div className="wind">
                        <p>wind speed</p>
                        <div className="windSpeed">
                        <p> 100.3</p>
                        </div>

                    </div>
                    </div>

                    <div className="skyContainer">

                    <div className="sky">
                        <p>wind speed</p>
                        <div className="skyDescription">
                        <p> clear</p>
                        </div>

                    </div>
                    </div>


                </div>
            
            </div>

        </div>
    )
}

export default weather;