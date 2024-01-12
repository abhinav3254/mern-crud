import './App.css';
import Home from './Pages/Home/Home';
import Add from './Pages/Add/Add';
import Nav from './nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Update from './Pages/Update/Update';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Add />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
