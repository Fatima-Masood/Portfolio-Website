import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataEntry from './Pages/DataEntry';
import Portfolio from './Pages/Portfolio';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DataEntry />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;