import './App.css';
import Navigation from './components/AntNavigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExperimentNavigation from './components/Experiments/ExperimentNavigation';
import React from 'react';
import Footer from './components/Website_Components/footer';
import ExperimentList from './components/Experiments/ExperimentList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/experiments" element={<ExperimentList />} />
          <Route path="/experiment/:experimentPath/*" element={<ExperimentNavigation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;