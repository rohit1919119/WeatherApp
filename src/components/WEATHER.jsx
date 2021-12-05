import react from "react";
import Sunny from '../sun.png';

function weather({weathers}){

    // console.log(weathers)


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
                                <img src={Sunny} alt="" />
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

                    </div>
                
                </div>

            </div>
    )
}

export default weather;