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

                </div>
            
            </div>

        </div>
    )
}

export default weather;