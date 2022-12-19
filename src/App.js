import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Admissions from './components/Admissions';
import Home from './components/Home';
import Mission from './components/Mission'; 
import Academics from './components/Academics';
import MandatoryDisclosure from './components/MandatoryDisclosure';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/mission" element={<Mission />}/>
          <Route path="/academics" element={<Academics />}/>
          <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />}/>
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
