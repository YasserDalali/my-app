import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from "./pages/Landing";
import SecondLanding from "./pages/SecondLanding";

function App() {
  return(
  <Router>
    <Routes>
      <Route path="/Landing" element={<Landing />} />
      <Route path="/" element={<SecondLanding />} />
    </Routes>
  </Router>
);
}

export default App;
