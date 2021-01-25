import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Who from './Who';
import 'bootstrap/dist/css/bootstrap.min.css';
import MidSection from './MidSection';
import BottomSection from './BottomSection';
import Footer from './Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Who />
      <MidSection />
      <BottomSection />
      <Footer />
    </div>
  );
}

export default App;
