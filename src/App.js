import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Level1 from './pages/Level1';

function App() {

  const [score, setScore] = useState(0)
  const [life, setLife] = useState(3)

  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/level1" element={<Level1
            life={life} setLife={ setLife} score={score} setScore={setScore} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
