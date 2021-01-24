import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Who from './Who';
import 'bootstrap/dist/css/bootstrap.min.css';
import MidSection from './MidSection';
import BottomSection from './BottomSection';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Who />
      <MidSection />
      <BottomSection />
    </div>
  );
}

export default App;
