import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home/Home';
import Attributions from './pages/Attributions/Attributions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attributions" element={<Attributions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
