import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Home from './pages/Home';
import Navbar from './Components/Navbar';


function App() {
  return <>
  <BrowserRouter>
   <Navbar/> 
  <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>} />
    <Route path="/education" element={<Education/>} />
    <Route path="/about" element={<About/>} />
  </Routes>
  </BrowserRouter>
  </>
}

export default App;
