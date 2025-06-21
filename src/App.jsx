import './App.css';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Learn from './pages/Learn';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </>
  );
}

export default App;
