import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header.js"
import Landing from "./Landing.js"
import Featured from "./Featured.js"
import About from './About.js'
import ContactUs from './ContactUs.js'
import Description from './Description.js'
import Login from './Login.js'
import Checkout from './Checkout.js'
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        < Switch >

          <Route path="/login" >
            <Login />
          </Route>

          <Route path="/checkout" >
            <Checkout />
          </Route>

          <Route path="/" >
            <Header />
            <Landing />
            <Description />
            <Featured />
            <About />
            <ContactUs />
          </Route>

        </Switch >

      </div>
    </Router>
  );
}

export default App;
