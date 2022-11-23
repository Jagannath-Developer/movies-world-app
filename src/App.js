import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import TopRate from './pages/TopRate';
import Upcoming from './pages/Upcoming';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/movie/popular' element={<HomePage/>} />
        <Route path='/movie/top_rated' element={<TopRate/>} />
        <Route path='/movie/upcoming' element={<Upcoming/>} />
      </Routes>
    </div>
  );
}

export default App;
