import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LocationForm from './components/LocationForm'
import './App.css';

function App() {
  const [quality, setQuality] = useState();

  return (
    <div>
      <nav>
        <Link to="/">Home|</Link>
        <Link to="/PM">What is a Pariculate Matter (PM)?|</Link>
        <Link to="/contact">Contact|</Link>
        <Link to="/about">About</Link>
      </nav>
        <LocationForm />
      <main></main>
    </div>
  );
}

export default App;
