
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About/About';
import BlogPage from './Components/BlogPage/BlogPage/BlogPage';
import Contacts from './Components/Contacts/Contacts/Contacts';
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
        <Route path="/blogs" element={<BlogPage/>}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
