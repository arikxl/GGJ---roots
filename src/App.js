import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Level1 from './pages/Level1';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/level1" element={<Level1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
