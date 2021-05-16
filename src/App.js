import './App.css';
import Header from "./Header.js"
import Landing from "./Landing.js"
import Featured from "./Featured.js"
import About from './About.js'
import ContactUs from './ContactUs.js'
import Description from './Description.js'


function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Description />
      <Featured />
      <About />
      <ContactUs />
    </div>
  );
}

export default App;
