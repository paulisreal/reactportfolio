import Aboutpage from './components/Aboutpage';
import Body from './components/Body';
import Contactpage from './components/Contactpage';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import Workpage from './components/Workpage';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
  <Router>
    <div className="App">
      
    <Navbar />
    <Routes>
    <Route path="/" element={<Body/>} />
    <Route path="/work" element={<Workpage/>} />
    <Route path="/about" element={<Aboutpage/>} />
    <Route path="/contact" element={<Contactpage/>} />
    <Route path="/socials" element={<Socials/>} />
      
    </Routes>
        <Body/>
        <Workpage/>
        <Aboutpage/>
        <Contactpage/>
        <Socials/>
    </div>
  
  </Router>    
  );
}

export default App;
