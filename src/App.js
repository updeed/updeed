
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About/About';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Team from './Components/Team/Team/Team';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
