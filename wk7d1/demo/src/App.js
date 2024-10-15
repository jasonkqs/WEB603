
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Barchart from './barchart/src/index';
import CollapsibleTree from './collapsibletree/src/index';
import VertexOfSphere from './vertexofsphere/src/index';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/barchart">Barchart Animation</Link></li>
            <li><Link to="/collapsibletree">Collapsible Tree Animation</Link></li>
            <li><Link to="/vertexofsphere">Vertex of Sphere Animation</Link></li>
          </ul>
        </nav>

        <Route path="/barchart" component={Barchart} />
        <Route path="/collapsibletree" component={CollapsibleTree} />
        <Route path="/vertexofsphere" component={VertexOfSphere} />
      </div>
    </Router>
  );
}

export default App;
