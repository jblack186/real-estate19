import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Who from './Who';
import 'bootstrap/dist/css/bootstrap.min.css';
import MidSection from './MidSection';
import BottomSection from './BottomSection';
import Footer from './Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import About from './About';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
                  <NavBar />

      <Route exact path='/' render= {(props) => { return <Home {...props}  />}} />
      <Route exact path='/about' render= {(props) => { return <About {...props}  />}} />
      <Route exact path='/contact' render= {(props) => { return <Contact {...props}  />}} />

      <Footer />

    </div>
  );
}

export default App;
