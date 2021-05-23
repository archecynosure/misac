import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from "./firebase";
import './Login.css'


export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {

                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className='login__logo' src='images/login logo.svg' alt='' />
            </Link>
            <div className="login__box">
                <form>
                    < h5 > E - mail </h5>

                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5 > Password </h5>

                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" className="login__signInButton" onClick={signIn}> Prijavite se</button>

                </form>
                <p > Prijavom potvrđujete saglasnost sa našim Uslovima korišćenja.</p>
                <button className="login__registerButton" onClick={register}>Registrujte se</button>
            </div>
        </div>
    )
}
