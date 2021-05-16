import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="header">
        
                <img className="header__logo"
                    src="images/Mišac.png"
                    alt="logo" />
                   
                   <div className="header__functional">
                
                      <p className="prijava">PRIJAVA/</p> 
                      <p className="registracija">  REGISTRACIJA</p>
                  
                 <img className="basket__icon" src="images/wicker-basket.png" alt="basket icon"/>
                <p className="basket__count">0</p>
        </div>
        </div>
    )
}

export default Header
