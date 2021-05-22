import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header.js"
import Landing from "./Landing.js"
import Featured from "./Featured.js"
import About from './About.js'
import ContactUs from './ContactUs.js'
import Description from './Description.js'


function App() {
  return (
    <Router>
      <div className="App">
        < Switch >
          <Route path="/login" >
            <Landing />
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
