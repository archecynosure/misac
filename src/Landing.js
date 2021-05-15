import React from 'react'
import "./Landing.css";

function Landing() {
    return (
        <div className="landing">
            <img className="landing__image" src="images/gerbil 4.svg" alt="website mascot" />
            <h1>Za<span>miš</span>ljamo najbolje!</h1>
            <div className="searchBar">
            <input type="text" value="Pretraga proizvoda" />
            <img src="images/transparency.svg" alt="search button" />
            </div>
            <div className="product__categories">
                <p>ODEĆA</p>
                <p>OBUĆA</p>
                <p>OPREMA</p>
                <p>KOZMETIKA</p>
            </div>
        </div>
    )
}

export default Landing
