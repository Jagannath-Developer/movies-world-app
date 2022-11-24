import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import TopRate from './pages/TopRate';
import Upcoming from './pages/Upcoming';
import Navbar from './components/Navbar';
import SingleMovieDetail from './components/SingleMovieDetail';
import SearchPage from './pages/SearchPage';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/movie/page/:id' element={<SingleMovieDetail/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/search/:id' element={<SearchPage/>} />
        <Route path='/movie/popular' element={<HomePage/>} />
        <Route path='/movie/top_rated' element={<TopRate/>} />
        <Route path='/movie/upcoming' element={<Upcoming/>} />
        <Route path='/*' element={<h1>Page Not Found</h1>} />
      
      </Routes>
    </div>
  );
}

export default App;
