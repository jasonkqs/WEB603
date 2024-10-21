import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [selectedApp, setSelectedApp] = useState(null);

  const handleSelectApp = (id) => {
    setSelectedApp(id);
  };

  return (
    <Router>
      <div>
        <h1 className="title">TV APPS</h1>
        <div className="icon-container">
          <div onClick={() => handleSelectApp('netflix')}>
            <Link to="/netflix">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" 
                alt="Netflix" 
                className={`app-icon ${selectedApp === 'netflix' ? 'selected' : ''}`}
              />
            </Link>
          </div>

          <div onClick={() => handleSelectApp('hbo')}>
            <Link to="/hbo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
                alt="HBO Max"
                className={`app-icon ${selectedApp === 'hbo' ? 'selected' : ''}`}
              />
            </Link>
          </div>

          <div onClick={() => handleSelectApp('hulu')}>
            <Link to="/hulu">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
                alt="Hulu"
                className={`app-icon ${selectedApp === 'hulu' ? 'selected' : ''}`}
              />
            </Link>
          </div>

          <div onClick={() => handleSelectApp('prime')}>
            <Link to="/prime">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
                alt="Prime Video"
                className={`app-icon ${selectedApp === 'prime' ? 'selected' : ''}`}
              />
            </Link>
          </div>

        </div>
        <Routes>
          <Route path="/:id" element={<Child />} />
        </Routes>
      </div>
    </Router>
  );
}

function Child() {
  let { id } = useParams();

  return (
    <div>
      <h3 className="selection-display">You selected:<span>{id.charAt(0).toUpperCase() + id.slice(1)}</span></h3>
    </div>
  );
}

export default App;