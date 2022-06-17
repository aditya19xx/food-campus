import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Recipe from './Components/Recipe/Recipe';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path="/" element={ <Home /> } />
       <Route exact path="/home" element={ <Home /> } />
       <Route exact path="/about" element={ <About /> } />
       <Route exact path="/recipe" element={ <Recipe /> } />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
