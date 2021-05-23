import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">

            <img className="header__logo"
                src="images/Mišac.png"
                alt="logo" />

            <div className='nav'>
                <Link to="/login">
                    <div className="login__option" onClick={handleAuthenticaton}>
                        <p >{!user ? 'PRIJAVITE SE' : user.email}</p>
                    </div>
                </Link>
                <Link to="/checkout">
                    <img className="basket__icon" src="images/wicker-basket.png" alt="basket icon" />
                </Link>
                <p className="basket__count">{basket?.length}</p>
            </div>
        </div >
    )
}

export default Header
