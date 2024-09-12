import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function App() {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/about" element={ <About />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
function About() {
  return <h2>About</h2>;
}
function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <p>Chose your favorite topic.</p>
      <ul>
        <li>
          <Link to={"/topics/cats"}>Cats</Link>
        </li>
        <li>
          <Link to={"/topics/dogs"}>Dogs</Link>
        </li>
      </ul>
      <Routes>
        <Route path={"/topics/:topicID"} element={ <Topic />} />
      </Routes>
    </div>
  );
}
function Topic() {
  let { topicID } = useParams();
  return <h3>Requested topic ID: {topicID}</h3>; 
}