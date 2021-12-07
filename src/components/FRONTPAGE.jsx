import react from "react";
import Dog from "../pug1.png";
import './frontPage.css';

function frontPage(){

    return (
        <div className="frontPage">

            <div className="welcome">
                <img className='welcomeImg1' src={Dog} alt="" />
                <span className="welcomeTitle">

                Hey Buddy, Welcome Here!
                </span>
            </div>

            <div class="input-group mb-3 frontSearch">
              <input type="text" class="form-control inputSearch" id="inputSearch" onclick="frontSearch()" placeholder="Your City / Locality" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary btnbtn" type="button">Search</button>
              </div>
            </div>


            

        </div>
        

        
    )
}

export default frontPage;