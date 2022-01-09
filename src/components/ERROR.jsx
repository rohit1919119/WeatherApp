// import react from "react";
// import Dog from "../pug1.png";
import Doggy from '../dog.png';
import './error.css';


function Error(){

    return (
        <div className="frontPage1">

            <div className="welcome">
                <img className='welcomeImg' src={Doggy} alt="" />
                <div className="welcomeContent">

                  <span className="welcomeTitle1">
                    <pre>Ohh, are you an alien?
                    </pre> 
                  </span>
  
                  <span className="welcomeTitle1">
                    <pre>
                      Because this place doesn't belong to Mother Earth.
                    </pre> 
                  </span>
                </div>
            </div>

            {/* <div class="input-group mb-3 frontSearch">
              <input type="text" class="form-control inputSearch" id="inputSearch" onclick="frontSearch()" placeholder="Your City / Locality" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary btnbtn" type="button">Search</button>
              </div>
            </div> */}
        </div>
        

        
    )
}

export default Error;