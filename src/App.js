import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Atlas from './views/Atlas/Atlas';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/atlas" element={ <Atlas />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
