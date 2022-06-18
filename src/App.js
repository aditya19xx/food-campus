import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Chinese from './Components/Chinese/Chinese';
import Thai from './Components/Thai/Thai';
import Mexican from './Components/Mexican/Mexican';
import Bangla from './Components/Bangla/Bangla';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path="/" element={ <Home /> } />
       <Route exact path="/home" element={ <Home /> } />
       <Route exact path="/chinese" element={ <Chinese /> } />
       <Route exact path="/thai" element={ <Thai /> } />
       <Route exact path="/mexican" element={ <Mexican /> } />
       <Route exact path="/bangla" element={ <Bangla /> } />
       <Route exact path="/contact" element={ <Contact /> } />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
